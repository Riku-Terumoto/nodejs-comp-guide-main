// ファイルへの書き込み
// __dirname, __filename
// path
const fs = require('fs');
const path = require('path');

// __dirnameは現在実行したjsファイルが格納されているディレクトリまでのパス
console.log(__dirname);
// 実行中のファイルまでの絶対パス
console.log(__filename);

// pathのresolveは第二引数に以下の相対パスを含めた場合、第一引数のパスから一つ上がって、distディレクトリに入ると解釈してくれる
// node.jsでは親のディレクトリを経由してパス指定しなければならない場合はpathのresolveを使用する
const distPath = path.resolve(__dirname, '../dist/test.txt');

// ディレクトリを一つ一つ区切って指定することも可能
// const distPath = path.resolve(__dirname, '..', 'dist' 'test.txt');

// __dirnameを使用しているのに、絶対パスを指定すると、__dirnameは無視される
// const distPath = path.resolve(__dirname, '/test.txt');

// pathのjoinは指定したパスを結合する
// const distPath = path.join(__dirname, '/test.txt');

fs.writeFileSync(distPath, 'hello, node.js');
console.log(distPath);

// writeFileSyncの第一引数はファイルを出力したい場所のパス
// fs.writeFileSync(__dirname + '../dist/test.txt', 'hello, node.js');
// console.log('hello, node.js');
