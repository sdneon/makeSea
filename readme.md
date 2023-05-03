# makeSea
## Making a Single-Executable App in Node.JS+ 20

[Single-Executable App](https://nodejs.org/api/all.html#all_single-executable-applications_single-executable-applications) is a new experimental feature from Node.JS 19. It's still evolving. Thus, the steps to make one changed in v20 - extra steps to create a JSON descriptor so as to generate an intermediate BLOB. 

This repo is a simple Node.JS+ script to ease creation of SEApp, just by supplying the bootstrap (JS) file. Hiding all the cumbersome steps.

## Usage

- Prepare your bootstrap file for embedding as SEApp start point.
- Make the SEAppp:
```
node makeSea <bootstrap_file_path>
OR
node makeSea <bootstrap_file_path> [optional_output_path]
```
For example, use the provided sample/hello.js:
```
node makeSea hello
```

### ✨Magic ✨.
Under the hood, several intermediate files are generated as needed by Node:
* SEApp config.json - specifies where bootstrap is, and output to what blob name.
* Blob - the thing to be embedded for v20. Previously in v19, the bootstrap JS is embedded directly instead. From v20, blobs are supposed to make embedding other things easier.
* SEApp EXE - a copy of node.exe is made as your SEApp.

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