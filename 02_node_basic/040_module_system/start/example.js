// モジュール・・・ソースコードを機能ごとに分割した一つの単位。
// 代表的なものにESM,CJSが存在する。
// GoogleChrome・・・ES Module
// node.js・・・CommonJS, ES Module

// CommonJSの特徴
// ・node.js独自の仕組み
// ・ブラウザでは使用できない
// ・require/module.exports/exportsを使用
// ・ESM時と一部使える機能が異なる
// ・基本的にはESMの記述を推奨

// ES Moduleの特徴
// ・ECMAScriptの標準
// ・ブラウザで使用可能
// ・import/exportを使用
// ・Node.jsでは明示的な指定が必要
// ・基本的にはESMの記述を推奨

// function plus(a, b) {
//   return a + b;
// }
// const result = plus(1, 2);
// console.log(result);

// requireの相対パスはこのファイルk（example.js）からの相対パスになる（CommonJSは拡張値は省略できる）
// calcファイルは二つのexportsした関数を持っている為、分割代入で取得
const { plus } = require('./calc');
const result = plus(1, 2);
console.log(result);
