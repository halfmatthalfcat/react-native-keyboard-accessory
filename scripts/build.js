const fs = require('fs-extra');

fs.removeSync('./dist');
fs.copySync('./package.json', './dist/package.json');
fs.copySync('./README.md', './dist/README.md');
fs.copySync('./LICENSE', './dist/LICENSE');
fs.copySync('./index.d.ts', './dist/index.d.ts');
