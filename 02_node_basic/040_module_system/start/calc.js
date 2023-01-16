function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

// CommonJS
// module.exportsに渡したい関数を代入することで他ファイルで使用することができる
// 使う側はrequireで取得する
// exportsはmodule.exportsと同じオブジェクトを参照している
console.log(exports === module.exports); // true
module.exports = {
  plus,
  minus,
};

// ただ、exportsに代入してしまうとmodule.exportsとは異なるオブジェクトになってしまう（エラーになる）
// あくまで大元はmodule.exports
// exports = {
//   plus,
//   minus,
// };
