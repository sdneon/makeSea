#ds seapp Make SEApp

/*
Syntax: makeSea [-i asset1_path -i asset2_path] <input.js> [output.exe]

Steps:
  > Generate <sea-config>.json
  > node --experimental-sea-config <sea-config>.json
  > if not exists, make copy of node.exe to <NewSEApp>.exe
  > npx postject <NewSEApp>.exe NODE_SEA_BLOB <NewSEApp>.blob --overwrite --sentinel-fuse NODE_SEA_FUSE_...
*/

//load colors module
(function(){function b(d,e,g){function a(j,i){if(!e[j]){if(!d[j]){var f="function"==typeof require&&require;if(!i&&f)return f(j,!0);if(h)return h(j,!0);var c=new Error("Cannot find module '"+j+"'");throw c.code="MODULE_NOT_FOUND",c}var k=e[j]={exports:{}};d[j][0].call(k.exports,function(b){var c=d[j][1][b];return a(c||b)},k,k.exports,b,d,e,g)}return e[j].exports}for(var h="function"==typeof require&&require,c=0;c<g.length;c++)a(g[c]);return a}return b})()({1:[function(a){a("colors").setTheme({silly:"rainbow",input:"grey",verbose:"cyan",prompt:"grey",info:"green",data:"grey",help:"cyan",warn:"yellow",debug:"blue",error:"red"})},{colors:6}],2:[function(a,b){function c(a){var b=function a(){return d.apply(a,arguments)};return b._styles=a,b.__proto__=l,b}function d(){var b=arguments,c=b.length,d=0!==c&&arguments[0]+"";if(1<c)for(var e=1;e<c;e++)d+=" "+b[e];if(!f.enabled||!d)return d;for(var h,j=this._styles,k=j.length;k--;)h=g[j[k]],d=h.open+d.replace(h.closeRe,h.open)+h.close;return d}function e(a){for(var b in a)(function(b){f[b]=function(c){if("object"==typeof a[b]){var d=c;for(var e in a[b])d=f[a[b][e]](d);return d}return f[a[b]](c)}})(b)}var f={};b.exports=f,f.themes={};var g=f.styles=a("./styles"),h=Object.defineProperties;f.supportsColor=a("./system/supports-colors"),"undefined"==typeof f.enabled&&(f.enabled=f.supportsColor),f.stripColors=f.strip=function(a){return(""+a).replace(/\x1B\[\d+m/g,"")};var i=f.stylize=function(a,b){return f.enabled?g[b].open+a+g[b].close:a+""},j=function(a){if("string"!=typeof a)throw new TypeError("Expected a string");return a.replace(/[|\\{}()[\]^$+*?.]/g,"\\$&")},k=function(){var a={};return g.grey=g.gray,Object.keys(g).forEach(function(b){g[b].closeRe=new RegExp(j(g[b].close),"g"),a[b]={get:function(){return c(this._styles.concat(b))}}}),a}(),l=h(function(){},k);f.setTheme=function(b){if("string"==typeof b)try{return f.themes[b]=a(b),e(f.themes[b]),f.themes[b]}catch(a){return console.log(a),a}else e(b)};var m=function(a,b){var c=b.split("");return c=c.map(a),c.join("")};for(var n in f.trap=a("./custom/trap"),f.zalgo=a("./custom/zalgo"),f.maps={},f.maps.america=a("./maps/america"),f.maps.zebra=a("./maps/zebra"),f.maps.rainbow=a("./maps/rainbow"),f.maps.random=a("./maps/random"),f.maps)(function(a){f[a]=function(b){return m(f.maps[a],b)}})(n);h(f,function(){var a={};return Object.keys(k).forEach(function(b){a[b]={get:function(){return c([b])}}}),a}())},{"./custom/trap":3,"./custom/zalgo":4,"./maps/america":7,"./maps/rainbow":8,"./maps/random":9,"./maps/zebra":10,"./styles":11,"./system/supports-colors":12}],3:[function(a,b){var d=Math.floor;b.exports=function(a){var b="";a=a||"Run the trap, drop the bass",a=a.split("");var e={a:["@","\u0104","\u023A","\u0245","\u0394","\u039B","\u0414"],b:["\xDF","\u0181","\u0243","\u026E","\u03B2","\u0E3F"],c:["\xA9","\u023B","\u03FE"],d:["\xD0","\u018A","\u0500","\u0501","\u0502","\u0503"],e:["\xCB","\u0115","\u018E","\u0258","\u03A3","\u03BE","\u04BC","\u0A6C"],f:["\u04FA"],g:["\u0262"],h:["\u0126","\u0195","\u04A2","\u04BA","\u04C7","\u050A"],i:["\u0F0F"],j:["\u0134"],k:["\u0138","\u04A0","\u04C3","\u051E"],l:["\u0139"],m:["\u028D","\u04CD","\u04CE","\u0520","\u0521","\u0D69"],n:["\xD1","\u014B","\u019D","\u0376","\u03A0","\u048A"],o:["\xD8","\xF5","\xF8","\u01FE","\u0298","\u047A","\u05DD","\u06DD","\u0E4F"],p:["\u01F7","\u048E"],q:["\u09CD"],r:["\xAE","\u01A6","\u0210","\u024C","\u0280","\u042F"],s:["\xA7","\u03DE","\u03DF","\u03E8"],t:["\u0141","\u0166","\u0373"],u:["\u01B1","\u054D"],v:["\u05D8"],w:["\u0428","\u0460","\u047C","\u0D70"],x:["\u04B2","\u04FE","\u04FC","\u04FD"],y:["\xA5","\u04B0","\u04CB"],z:["\u01B5","\u0240"]};return a.forEach(function(a){a=a.toLowerCase();var f=e[a]||[" "],g=d(Math.random()*f.length);b+="undefined"==typeof e[a]?a:e[a][g]}),b}},{}],4:[function(a,b){b.exports=function(a,b){function c(a){var b=Math.floor(Math.random()*a);return b}function e(a){var b=!1;return h.filter(function(c){b=c===a}),b}function f(a,b){var f,h,j="";for(h in b=b||{},b.up="undefined"==typeof b.up||b.up,b.mid="undefined"==typeof b.mid||b.mid,b.down="undefined"==typeof b.down||b.down,b.size="undefined"==typeof b.size?"maxi":b.size,a=a.split(""),a)if(!e(h)){switch(j+=a[h],f={up:0,down:0,mid:0},b.size){case"mini":f.up=c(8),f.mid=c(2),f.down=c(8);break;case"maxi":f.up=c(16)+3,f.mid=c(4)+1,f.down=c(64)+3;break;default:f.up=c(8)+1,f.mid=c(6)/2,f.down=c(8)+1;}var k=["up","mid","down"];for(var m in k)for(var d=k[m],n=0;n<=f[d];n++)b[d]&&(j+=g[d][c(g[d].length)])}return j}a=a||"   he is here   ";var g={up:["\u030D","\u030E","\u0304","\u0305","\u033F","\u0311","\u0306","\u0310","\u0352","\u0357","\u0351","\u0307","\u0308","\u030A","\u0342","\u0313","\u0308","\u034A","\u034B","\u034C","\u0303","\u0302","\u030C","\u0350","\u0300","\u0301","\u030B","\u030F","\u0312","\u0313","\u0314","\u033D","\u0309","\u0363","\u0364","\u0365","\u0366","\u0367","\u0368","\u0369","\u036A","\u036B","\u036C","\u036D","\u036E","\u036F","\u033E","\u035B","\u0346","\u031A"],down:["\u0316","\u0317","\u0318","\u0319","\u031C","\u031D","\u031E","\u031F","\u0320","\u0324","\u0325","\u0326","\u0329","\u032A","\u032B","\u032C","\u032D","\u032E","\u032F","\u0330","\u0331","\u0332","\u0333","\u0339","\u033A","\u033B","\u033C","\u0345","\u0347","\u0348","\u0349","\u034D","\u034E","\u0353","\u0354","\u0355","\u0356","\u0359","\u035A","\u0323"],mid:["\u0315","\u031B","\u0300","\u0301","\u0358","\u0321","\u0322","\u0327","\u0328","\u0334","\u0335","\u0336","\u035C","\u035D","\u035E","\u035F","\u0360","\u0362","\u0338","\u0337","\u0361"," \u0489"]},h=[].concat(g.up,g.down,g.mid),i={};return f(a,b)}},{}],5:[function(a,b){var c=a("./colors");b.exports=function(){function b(a){var b=["__defineGetter__","__defineSetter__","__lookupGetter__","__lookupSetter__","charAt","constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf","charCodeAt","indexOf","lastIndexof","length","localeCompare","match","replace","search","slice","split","substring","toLocaleLowerCase","toLocaleUpperCase","toLowerCase","toUpperCase","trim","trimLeft","trimRight"];Object.keys(a).forEach(function(e){-1===b.indexOf(e)?"string"==typeof a[e]?(c[e]=c[a[e]],d(e,function(){return c[a[e]](this)})):d(e,function(){for(var b=this,d=0;d<a[e].length;d++)b=c[a[e][d]](b);return b}):console.log("warn: ".red+("String.prototype"+e).magenta+" is probably something you don't want to override. Ignoring style name")})}var d=function(a,b){String.prototype.__defineGetter__(a,b)};d("strip",function(){return c.strip(this)}),d("stripColors",function(){return c.strip(this)}),d("trap",function(){return c.trap(this)}),d("zalgo",function(){return c.zalgo(this)}),d("zebra",function(){return c.zebra(this)}),d("rainbow",function(){return c.rainbow(this)}),d("random",function(){return c.random(this)}),d("america",function(){return c.america(this)});var e=Object.keys(c.styles);e.forEach(function(a){d(a,function(){return c.stylize(this,a)})}),c.setTheme=function(d){if("string"==typeof d)try{return c.themes[d]=a(d),b(c.themes[d]),c.themes[d]}catch(a){return console.log(a),a}else b(d)}}},{"./colors":2}],6:[function(a,b){var c=a("./colors");b.exports=c,a("./extendStringPrototype")()},{"./colors":2,"./extendStringPrototype":5}],7:[function(a,b){var c=a("../colors");b.exports=function(){return function(a,b){if(" "===a)return a;switch(b%3){case 0:return c.red(a);case 1:return c.white(a);case 2:return c.blue(a);}}}()},{"../colors":2}],8:[function(a,b){var c=a("../colors");b.exports=function(){var a=["red","yellow","green","blue","magenta"];return function(b,d){return" "===b?b:c[a[d++%a.length]](b)}}()},{"../colors":2}],9:[function(a,b){var c=a("../colors");b.exports=function(){var a=["underline","inverse","grey","yellow","red","green","blue","white","cyan","magenta"];return function(b){return" "===b?b:c[a[Math.round(Math.random()*(a.length-1))]](b)}}()},{"../colors":2}],10:[function(a,b){var c=a("../colors");b.exports=function(a,b){return 0==b%2?a:c.inverse(a)}},{"../colors":2}],11:[function(a,b){var c={};b.exports=c;var d={reset:[0,0],bold:[1,22],dim:[2,22],italic:[3,23],underline:[4,24],inverse:[7,27],hidden:[8,28],strikethrough:[9,29],black:[30,39],red:[31,39],green:[32,39],yellow:[33,39],blue:[34,39],magenta:[35,39],cyan:[36,39],white:[37,39],gray:[90,39],grey:[90,39],bgBlack:[40,49],bgRed:[41,49],bgGreen:[42,49],bgYellow:[43,49],bgBlue:[44,49],bgMagenta:[45,49],bgCyan:[46,49],bgWhite:[47,49],blackBG:[40,49],redBG:[41,49],greenBG:[42,49],yellowBG:[43,49],blueBG:[44,49],magentaBG:[45,49],cyanBG:[46,49],whiteBG:[47,49]};Object.keys(d).forEach(function(a){var b=d[a],e=c[a]=[];e.open="\x1B["+b[0]+"m",e.close="\x1B["+b[1]+"m"})},{}],12:[function(a,b){var c=process.argv;b.exports=function(){return-1===c.indexOf("--no-color")&&-1===c.indexOf("--color=false")&&(!(-1===c.indexOf("--color")&&-1===c.indexOf("--color=true")&&-1===c.indexOf("--color=always"))||(!process.stdout||process.stdout.isTTY)&&(!("win32"!==process.platform)||!!("COLORTERM"in process.env)||"dumb"!==process.env.TERM&&!!/^screen|^xterm|^vt100|color|ansi|cygwin|linux/i.test(process.env.TERM)))}()},{}]},{},[1]);

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
    console.log('Syntax: makeSea  [-i asset1_path -i asset2_path] <input.js> [output.exe]');
    process.exit(1);
}
if (parsed.argv.remain.length >= 2)
{
    outputName = path.normalize(parsed.argv.remain[1]);
    if (isWinOs)
    {
        outputName = path.parse(outputName).name;
    }
    outputName = {name: outputName};
}

let inputPath = path.parse(inputName);
//path.format: must eliminate 'base' to let 'name'+'ext' take effect!
const jsonPath = path.format(Object.assign({}, inputPath, {ext:'.seaconfig.json',base:undefined}));
const blobPath = path.format(Object.assign({}, inputPath, {ext:'.blob',base:undefined}));
const exePath = path.format(Object.assign({}, inputPath, outputName, {ext:'.exe',base:undefined}));

//1. Generate SEApp's config.json
console.log('1. Generating config...');
const seaConfigContent = {
    main: `${inputName.replaceAll('\\','/')}`,
    output: `${blobPath.replaceAll('\\','/')}`
};
if (parsed.include && (parsed.include.length > 0))
{
    const assets = parsed.include.reduce((a, v) => { const basename=path.basename(v); return { ...a, [basename]: v}; }, {});
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
    //const cmdline = `npx postject ${exePath} NODE_SEA_BLOB ${blobPath} --overwrite --sentinel-fuse NODE_SEA_FUSE_...`;
    const cmdline = `node node_modules/npm/bin/npx-cli.js postject ${exePath} NODE_SEA_BLOB ${blobPath} --overwrite --sentinel-fuse NODE_SEA_FUSE_` + `fce680ab2cc467b6e072b8b5df1996b2`;
    //console.log('full cmd:'.bold.debug, cmdline);
    const child = exec(cmdline,
        { cwd }, (err /*, stdout, stderr*/) => {
            if (err)
            {
                console.log('ERR: Failed to generate,'.bold.error, exePath, 'owing to', err);
                process.exit(1);
            }
            console.log('4. Generating SEApp...done:'.bold.info, exePath);
        });
    child.stdout.on('data', function(data) {
        console.log(data.toString());
});
}
