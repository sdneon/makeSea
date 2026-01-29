# makeSea SEA²
## Making a Single-Executable App in Node.JS+ 25.5.0

[Single-Executable App](https://nodejs.org/api/all.html#all_single-executable-applications_single-executable-applications) allows the distribution of a Node.js application conveniently to a system that does not have Node.js installed. This is via packing everything into a single Node.js executable.

The steps to make one is evolving and been further [streamlined in v25.5.0](https://nodejs.org/api/all.html#all_single-executable-applications_generating-single-executable-applications-with---build-sea). Now, only Node.js executable itself is needed, using the new `--build-sea` commandline line option. I.e., blobs and postject are no longer needed. Thus, this makeSea may soon be retired, while remaining as a SEApp code example for bundling assets.

2 ways to build a SEApp (after preparing SEA script and optional assets to bundle):
* Using Node.JS 25.5.0 and beyond:
  1. Write the JSON descriptor/configuration file describing contents of SEApp.
  2. Run `node --build-sea=config_file_path`
* OR: Using makeSea's commadnline style:
  1.  Prepare command file with command like `makeSea -i asset_item_path sea_script_path` (with all assets and options listed). You may of course simply run the command directly, though a .BAT file can be reused for updating the SEApp.  
  2. Run it.

### Commandline Options
[Usage](#usage) applies, with these ([nopt](https://github.com/npm/nopt) style) options available:
* `-i`: include given asset; optional; can specify many.
* SEA configuration options:
  * `-d` / `--disableExperimentalSEAWarning`: boolean; def: **false**.
  * `-s` / [`--useSnapshot`](https://nodejs.org/api/all.html#all_single-executable-applications_startup-snapshot-support): boolean; def: **false**. Refer to [doc](https://nodejs.org/api/all.html#all_single-executable-applications_startup-snapshot-support) for details on how to use snapshot correctly.
  * `-c` / [`--useCodeCache`](https://nodejs.org/api/all.html#all_single-executable-applications_v8-code-cache-support): boolean; def: **false**. Note: `import()` does not work when `useCodeCache` is true.
  * `-a` / [`--execArgv`](https://nodejs.org/api/all.html#all_single-executable-applications_execution-arguments): array of String of Node.js specific arguments; **optional**; examples: ["--no-warnings", "--max-old-space-size=4096"]
  * `-e` / [`--execArgvExtension`](https://nodejs.org/api/all.html#all_single-executable-applications_execution-argument-extension): String indicating where SEApp can obtain input arguments from; def: **"env"**, options: "none", "env", "cli".
* last 2 arguments: path to SEAapp bootstrap script and optional output executable name.

---
## Making a Single-Executable App in Node.JS+ 20

[Single-Executable App](https://nodejs.org/api/all.html#all_single-executable-applications_single-executable-applications) is a new experimental and evolving feature from Node.JS 19. The steps to make one changed in v20 - extra steps to create a JSON descriptor so as to generate an intermediate BLOB.

This repo is a self-contained SEA to ease creation of SEA, just by supplying the bootstrap (JS) file. Hiding all the cumbersome steps.

Last tested OK with my [Node.JS 23.80.0+](https://github.com/sdneon/node/releases/tag/v23.8.0%2B).

### Going Ahead
Another limitation of SEA is that it can only have **One** *embedded script* to run! Hence, for more complex projects, bundling and minifying codes is the way to overcome this limitation, along with self-extracting dependencies/resources.
See companion tools, ***webpack and npm SEA²***s at [this repo](https://github.com/sdneon/webpack-sea).

PS: `makeSea.js` itself is a nice example illustrating how to write a ***self-extracting and single-executable app***, SEA²! Feel free to use it as a template 😁

## Usage

1. **Setup**. Download and put makeSea.exe in a working folder.
   * *Optionals* to put in the folder too:
      * Put a copy of of node.exe (an updated version you wish to use) for embedding.
      * Install npm & postject node modules.

    (You can skip the optionals above if you're fine with using makeSea's bundled versions - which may be outdated. makeSea will simply use any already there, or unpack and use its bundled versions).
2. **Prep**. Prepare your bootstrap file for embedding as SEA start point, along with any assets (optional) to be bundled.
3. **Make**. Make the SEA:
```
node makeSea <bootstrap_file_path>
OR
node makeSea [-i asset1_path -i asset2_path ...] <bootstrap_file_path> [optional_output_path]
```
### Example
Use the provided sample/hello.js:
```
node makeSea hello
```
To include assets, use `-i` for each of them:

   ```
   node makeSea -i path/file1.txt -i path/bundle.zip hello
   ```

   * They will be available as their base filename.
   * Recommendation:  if you have lots of assets, bundle them in a ZIP archive. Use a ZIP library like [adm-zip](https://github.com/cthackers/adm-zip) to extract them for use in the SEApp. 

Get asset example:
```js
const sea = require('node:sea');
const assetTxt = sea.getAsset('file1.txt', 'utf8'), //returned as string
    assetBin = sea.getAsset('bundle.zip'); //returned as ArrayBuffer

//extract ZIP'd asset
const AdmZip = require('adm-zip');
const zip = new AdmZip(Buffer.from(assetBin)); //need to convert ArrayBuffer to Node.JS' Buffer
zip.extractAllTo(__dirname); //unzip all
```
   * Unzipping the bundle is useful for delivering a local installation.
   * Alternatively, read individual entries as needed when not all files within are always needed.

See `makeSea.js` itself for details.

### ✨Magic ✨.
Under the hood, several intermediate files are generated as needed by Node:
* SEApp config.json - specifies where bootstrap and optional assets are, and output to what blob name.
* Blob - the thing to be embedded for v20. Previously in v19, the bootstrap JS is embedded directly instead. From v20, blobs are supposed to make embedding other things easier.
* SEA EXE - a copy of node.exe is made as your SEApp.

#### Last Step: npx

The last step to generate the SEApp itself typically uses `npx.cmd`, like so:
```
npx postject ${exePath} NODE_SEA_BLOB ${blobPath} --overwrite --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
```
However, it seems that npx may need an internet connection and will fail otherwise.
Thus, this the following is the alternative that works well.
```
node node_modules/npm/bin/npx-cli.js postject ${exePath} NODE_SEA_BLOB ${blobPath} --overwrite --sentinel-fuse NODE_SEA_FUSE_fce680ab2cc467b6e072b8b5df1996b2
```


## Included in repo
* [Node.JS+](https://github.com/sdneon/node) - at least version 20
* colors -for debug printouts
* npm, npx - an old version; update if desired
* sample/hello.js