#ds colors Make SEApp

/*
Steps:
  > Generate <sea-config>.json
  > node --experimental-sea-config <sea-config>.json
  > if not exists, make copy of node.exe to <NewSEApp>.exe
  > npx postject <NewSEApp>.exe NODE_SEA_BLOB <NewSEApp>.blob --overwrite --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
*/

const fs = require('node:fs'),
    path = require('node:path'),
    { exec } = require('node:child_process'),
    isWinOs = process.platform === 'win32',
    cwd = process.cwd();

let inputName, outputName;
if (process.argv.length >= 3)
{
    inputName = path.normalize(process.argv[2]);
    const inputPath = path.parse(inputName);
    if (inputPath.ext === '')
    {
        inputName = path.format(Object.assign({}, inputPath, {ext:'.js',base:undefined}));
    }
}
else
{
    console.log('Syntax: makeSea <input.js> [output.exe]');
    process.exit(1);
}
if (process.argv.length >= 4)
{
    outputName = path.normalize(process.argv[3]);
    if (isWinOs)
    {
        path.format(Object.assign({}, path.parse(outputName), {ext:'.exe',base:undefined}));
    }
}

let inputPath = path.parse(inputName);
//path.format: must eliminate 'base' to let 'name'+'ext' take effect!
const jsonPath = path.format(Object.assign({}, inputPath, {ext:'.seaconfig.json',base:undefined}));
const blobPath = path.format(Object.assign({}, inputPath, {ext:'.blob',base:undefined}));
const exePath = path.format(Object.assign({}, inputPath, {ext:'.exe',base:undefined}));

//1. Generate SEApp's config.json
console.log('1. Generating config...');
const seaConfigContent = `{ "main": "${inputName.replaceAll('\\','/')}", "output": "${blobPath.replaceAll('\\','/')}" }`;
//console.log(seaConfigContent);
fs.writeFile(jsonPath, seaConfigContent, { encoding: 'utf8' }, (err) => {
    if (err) {
        console.log('ERR: Failed to generate config,'.bold.error, jsonPath, 'owing to', err);
        process.exit(1);
    }
    console.log('1. Generating config...done:'.bold.info, jsonPath);
    genBlob();
});

function genBlob()
{
    console.log('2. Generating blob...');
    const cmdline = `node --experimental-sea-config ${jsonPath}`;
    //console.log('full cmd'.bold.debug, cmdline);
    exec(cmdline,
        { cwd }, (err /*, stdout, stderr*/) => {
            if (err)
            {
                console.log('ERR: Failed to generate blob,'.bold.error, blobPath, 'owing to', err);
                process.exit(1);
            }
            console.log('2. Generating blob...done:'.bold.info, blobPath);
            copyNode();
        });

}

function copyNode()
{
    fs.stat(exePath, (err, stat) => {
        if (!err && stat && stat.isFile())
        {
            //file exists
            console.log('3. Skip copying node as already exists:'.bold.warn, exePath);
            genSea();
            return;
        }
        console.log('3. Making copy of node...');
        fs.copyFile(isWinOs? 'node.exe': 'node', exePath, fs.constants.COPYFILE_EXCL, (err) => {
            if (err) {
                console.log('ERR: Failed to copy node to'.bold.error, exePath, 'owing to', err);
                process.exit(1);
            }
            console.log('3. Copying node...done.'.bold.info);
            genSea();
        });
    });
}

function genSea()
{
    console.log('4. Generating SEApp...');
    const cmdline = `npx postject ${exePath} NODE_SEA_BLOB ${blobPath} --overwrite --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2`;
    //console.log('full cmd'.bold.debug, cmdline);
    exec(cmdline,
        { cwd }, (err /*, stdout, stderr*/) => {
            if (err)
            {
                console.log('ERR: Failed to generate,'.bold.error, exePath, 'owing to', err);
                process.exit(1);
            }
            console.log('4. Generating SEApp...done:'.bold.info, exePath);
        });
}
