#ds seapp colors Make SEApp

/*
Syntax: makeSea [-i asset1_path -i asset2_path] <input.js> [output.exe]

Steps:
  > Generate <sea-config>.json
  > node --experimental-sea-config <sea-config>.json
  > if not exists, make copy of node.exe to <NewSEApp>.exe
  > npx postject <NewSEApp>.exe NODE_SEA_BLOB <NewSEApp>.blob --overwrite --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
*/

//Load nopt
(function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}const c=Object.values(d).map(a=>a[1]).reduce((b,c)=>Object.assign(b,c),{});global._require=function(b){const d=c[b];return a("number"==typeof d?d:b)};for(var h="function"==typeof require&&require,f=0;f<g.length;f++)a(g[f]);return a}return b})()({1:[function(a,b,c){function d(a,b,d,f){d=d||process.argv,a=a||{},b=b||{},"number"!=typeof f&&(f=2),j(a,b,d,f),d=d.slice(f);var h={},i={remain:[],cooked:d,original:d.slice(0)};return g(d,h,i.remain,a,b),e(h,a,c.typeDefs),h.argv=i,Object.defineProperty(h.argv,"toString",{value:function(){return this.original.map(JSON.stringify).join(" ")},enumerable:!1}),h}function e(a,b,e){e=e||c.typeDefs;var g={},h=[!1,!0,null,String,Array];Object.keys(a).forEach(function(i){if("argv"!==i){var d=a[i],k=Array.isArray(d),l=b[i];k||(d=[d]),l||(l=h),l===Array&&(l=h.concat(Array)),Array.isArray(l)||(l=[l]),j("val=%j",d),j("types=",l),d=d.map(function(h){if("string"==typeof h&&(j("string %j",h),h=h.trim(),"null"===h&&~l.indexOf(null)||"true"===h&&(~l.indexOf(!0)||~l.indexOf(Boolean))||"false"===h&&(~l.indexOf(!1)||~l.indexOf(Boolean))?(h=JSON.parse(h),j("jsonable %j",h)):~l.indexOf(Number)&&!isNaN(h)?(j("convert to number",h),h=+h):~l.indexOf(Date)&&!isNaN(Date.parse(h))&&(j("convert to date",h),h=new Date(h))),!b.hasOwnProperty(i))return h;!1===h&&~l.indexOf(null)&&!(~l.indexOf(!1)||~l.indexOf(Boolean))&&(h=null);var k={};return(k[i]=h,j("prevalidated val",k,h,b[i]),!f(k,i,h,b[i],e))?(c.invalidHandler?c.invalidHandler(i,h,b[i],a):!1!==c.invalidHandler&&j("invalid: "+i+"="+h,b[i]),g):(j("validated val",k,h,b[i]),k[i])}).filter(function(a){return a!==g}),d.length?k?(j(k,a[i],d),a[i]=d):a[i]=d[0]:delete a[i],j("k=%s val=%j",i,d,a[i])}})}function f(a,b,c,e,g){if(Array.isArray(e)){for(var h=0,k=e.length;h<k;h++)if(e[h]!==Array&&f(a,b,c,e[h],g))return!0;return delete a[b],!1}if(e===Array)return!0;if(e!==e)return j("Poison NaN",b,c,e),delete a[b],!1;if(c===e)return j("Explicitly allowed %j",c),a[b]=c,!0;for(var m=!1,n=Object.keys(g),h=0,k=n.length;h<k;h++){j("test type %j %j %j",b,c,n[h]);var o=g[n[h]];if(o&&(e&&e.name&&o.type&&o.type.name?e.name===o.type.name:e===o.type)){var p={};if(m=!1!==o.validate(p,b,c),c=p[b],m){a[b]=c;break}}}return j("OK? %j (%j %j %j)",m,b,c,n[h]),m||delete a[b],m}function g(a,b,c,d,e){j("parse",a,b,c);for(var f,g=o(Object.keys(d)),k=o(Object.keys(e)),l=0;l<a.length;l++){if(f=a[l],j("arg",f),f.match(/^-{2,}$/)){c.push.apply(c,a.slice(l+1)),a[l]="--";break}var m=!1;if("-"===f.charAt(0)&&1<f.length){var n=f.indexOf("=");if(-1<n){m=!0;var p=f.substr(n+1);f=f.substr(0,n),a.splice(l,1,f,p)}var q=h(f,e,k,g);if(j("arg=%j shRes=%j",f,q),q&&(j(f,q),a.splice.apply(a,[l,1].concat(q)),f!==q[0])){l--;continue}f=f.replace(/^-+/,"");for(var r=null;0===f.toLowerCase().indexOf("no-");)r=!r,f=f.substr(3);g[f]&&(f=g[f]);var s=d[f],t=Array.isArray(s);t&&1===s.length&&(t=!1,s=s[0]);var u=s===Array||t&&-1!==s.indexOf(Array);!d.hasOwnProperty(f)&&b.hasOwnProperty(f)&&(!Array.isArray(b[f])&&(b[f]=[b[f]]),u=!0);var v,w=a[l+1],x="boolean"==typeof r||s===Boolean||t&&-1!==s.indexOf(Boolean)||"undefined"==typeof s&&!m||"false"===w&&(null===s||t&&~s.indexOf(null));if(x){v=!r,("true"===w||"false"===w)&&(v=JSON.parse(w),w=null,r&&(v=!v),l++),t&&w&&(~s.indexOf(w)?(v=w,l++):"null"===w&&~s.indexOf(null)?(v=null,l++):w.match(/^-{2,}[^-]/)||isNaN(w)||!~s.indexOf(Number)?!w.match(/^-[^-]/)&&~s.indexOf(String)&&(v=w,l++):(v=+w,l++)),u?(b[f]=b[f]||[]).push(v):b[f]=v;continue}s===String&&(void 0===w?w="":w.match(/^-{1,2}[^-]+/)&&(w="",l--)),w&&w.match(/^-{2,}$/)&&(w=void 0,l--),v=void 0===w||w,u?(b[f]=b[f]||[]).push(v):b[f]=v,l++;continue}c.push(f)}}function h(a,b,c,d){if(a=a.replace(/^-+/,""),d[a]===a)return null;if(b[a])return b[a]&&!Array.isArray(b[a])&&(b[a]=b[a].split(/\s+/)),b[a];var e=b.___singles;e||(e=Object.keys(b).filter(function(a){return 1===a.length}).reduce(function(a,b){return a[b]=!0,a},{}),b.___singles=e,j("shorthand singles",e));var f=a.split("").filter(function(a){return e[a]});return f.join("")===a?f.map(function(a){return b[a]}).reduce(function(a,b){return a.concat(b)},[]):d[a]&&!b[a]?null:(c[a]&&(a=c[a]),b[a]&&!Array.isArray(b[a])&&(b[a]=b[a].split(/\s+/)),b[a])}var j=process.env.DEBUG_NOPT||process.env.NOPT_DEBUG?function(){console.error.apply(console,arguments)}:function(){},l=a("url"),m=a("path"),n=a("stream").Stream,o=a("abbrev"),p=a("osenv");b.exports=c=d,c.clean=e,c.typeDefs={String:{type:String,validate:function(a,b,c){a[b]=c+""}},Boolean:{type:Boolean,validate:function(a,b,c){c=c instanceof Boolean?c.valueOf():"string"==typeof c?isNaN(c)?"null"!==c&&"false"!==c:!!+c:!!c,a[b]=c}},url:{type:l,validate:function(a,b,c){return c=l.parse(c+""),!!c.host&&void(a[b]=c.href)}},Number:{type:Number,validate:function(a,b,c){return j("validate Number %j %j %j",b,c,isNaN(c)),!isNaN(c)&&void(a[b]=+c)}},path:{type:m,validate:function(a,b,c){if(!0===c)return!1;if(null===c)return!0;c+="";var d="win32"===process.platform,e=d?/^~(\/|\\)/:/^~\//,f=p.home();return a[b]=f&&c.match(e)?m.resolve(f,c.substr(2)):m.resolve(c),!0}},Stream:{type:n,validate:function(a,b,c){return!!(c instanceof n)&&void(a[b]=c)}},Date:{type:Date,validate:function(a,b,c){var d=Date.parse(c);return j("validate Date %j %j %j",b,c,d),!isNaN(d)&&void(a[b]=new Date(c))}}}},{abbrev:2,osenv:5,path:void 0,stream:void 0,url:void 0}],2:[function(a,b,c){function d(b){1===arguments.length&&Array.isArray(b)||(b=Array.prototype.slice.call(arguments,0));for(var c=0,d=b.length,f=[];c<d;c++)f[c]="string"==typeof b[c]?b[c]:b[c]+"";f=f.sort(e);for(var g={},h="",c=0,d=f.length;c<d;c++){var k=f[c],m=f[c+1]||"",n=!0,o=!0;if(k!==m){for(var p,q=0,r=k.length;q<r;q++)if(p=k.charAt(q),n=n&&p===m.charAt(q),o=o&&p===h.charAt(q),!n&&!o){q++;break}if(h=k,q===r){g[k]=k;continue}for(var s=k.substr(0,q);q<=r;q++)g[s]=k,s+=k.charAt(q)}}return g}function e(c,a){return c===a?0:c>a?1:-1}b.exports=c=d.abbrev=d,d.monkeyPatch=function(){Object.defineProperty(Array.prototype,"abbrev",{value:function(){return d(this)},enumerable:!1,configurable:!0,writable:!0}),Object.defineProperty(Object.prototype,"abbrev",{value:function(){return d(Object.keys(this))},enumerable:!1,configurable:!0,writable:!0})}},{}],3:[function(a,b){'use strict';var c=a("os");b.exports="function"==typeof c.homedir?c.homedir:function(){var a=process.env,b=a.HOME,c=a.LOGNAME||a.USER||a.LNAME||a.USERNAME;return"win32"===process.platform?a.USERPROFILE||a.HOMEDRIVE+a.HOMEPATH||b||null:"darwin"===process.platform?b||(c?"/Users/"+c:null):"linux"===process.platform?b||(0===process.getuid()?"/root":c?"/home/"+c:null):b||null}},{os:void 0}],4:[function(a,b){'use strict';var c="win32"===process.platform,d=c?/[^:]\\$/:/.\/$/;b.exports=function(){var a;return a=c?process.env.TEMP||process.env.TMP||(process.env.SystemRoot||process.env.windir)+"\\temp":process.env.TMPDIR||process.env.TMP||process.env.TEMP||"/tmp",d.test(a)&&(a=a.slice(0,-1)),a}},{}],5:[function(a,b,c){function d(a,b,d){var e=!1,f=!1;c[a]=function(h){var i=b();return i||e||f||!d||(e=!0,f=!0,g(d,function(a,b){f=!1,a||(i=b.trim())})),c[a]=function(a){return a&&process.nextTick(a.bind(null,null,i)),i},h&&!f&&process.nextTick(h.bind(null,null,i)),i}}var e="win32"===process.platform,f=a("path"),g=a("child_process").exec,h=a("os-tmpdir"),i=a("os-homedir");d("user",function(){return e?process.env.USERDOMAIN+"\\"+process.env.USERNAME:process.env.USER},"whoami"),d("prompt",function(){return e?process.env.PROMPT:process.env.PS1}),d("hostname",function(){return e?process.env.COMPUTERNAME:process.env.HOSTNAME},"hostname"),d("tmpdir",function(){return h()}),d("home",function(){return i()}),d("path",function(){return(process.env.PATH||process.env.Path||process.env.path).split(e?";":":")}),d("editor",function(){return process.env.EDITOR||process.env.VISUAL||(e?"notepad.exe":"vi")}),d("shell",function(){return e?process.env.ComSpec||"cmd":process.env.SHELL||"bash"})},{child_process:void 0,"os-homedir":3,"os-tmpdir":4,path:void 0}],6:[function(a){registerPackedModule("nopt",a("nopt"))},{nopt:1}]},{},[6]);

const fs = require('node:fs'),
    path = require('node:path'),
    { exec } = require('node:child_process'),
    isWinOs = process.platform === 'win32',
    cwd = process.cwd();

    nopt = require('nopt'),
    knownOpts = {
        include: [path, Array]
    },
    shortHands = {
        i: ['--include']
    },
    // everything is optional.
    // knownOpts and shorthands default to {}
    // arg list defaults to process.argv
    // slice defaults to 2
    parsed = nopt(knownOpts, shortHands, process.argv, 2);

let inputName, outputName;
if (parsed.argv.remain.length >= 1)
{
    inputName = path.normalize(parsed.argv.remain[0]);
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
if (parsed.argv.remain.length >= 2)
{
    outputName = path.normalize(parsed.argv.remain[1]);
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
const seaConfigContent = {
    main: `${inputName.replaceAll('\\','/')}`,
    output: `${blobPath.replaceAll('\\','/')}`
};
if (parsed.include && (parsed.include.length > 0))
{
    const assets = parsed.include.reduce((a, v) => { v=path.basename(v); return { ...a, [v]: v}; }, {});
    Object.assign(seaConfigContent, {assets});
}
//console.log(seaConfigContent);
fs.writeFile(jsonPath, JSON.stringify(seaConfigContent), { encoding: 'utf8' }, (err) => {
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
    //const cmdline = `npx postject ${exePath} NODE_SEA_BLOB ${blobPath} --overwrite --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2`;
    const cmdline = `node node_modules/npm/bin/npx-cli.js postject ${exePath} NODE_SEA_BLOB ${blobPath} --overwrite --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2`;
    //console.log('full cmd:'.bold.debug, cmdline);
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
