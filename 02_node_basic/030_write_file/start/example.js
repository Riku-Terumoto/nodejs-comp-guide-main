// ファイルへの書き込み
// __dirname, __filename

const fs = require('fs');

// __dirnameは現在実行したjsファイルが格納されているディレクトリまでのパス
console.log(__dirname);
// 実行中のファイルまでの絶対パス
console.log(__filename);

// writeFileSyncの第一引数はファイルを出力したい場所のパス
fs.writeFileSync(__dirname + '/test.txt', 'hello, node.js');
// console.log('hello, node.js');
