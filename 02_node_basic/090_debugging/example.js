const { plus } = require('./calc');
const result = plus(1, 2);
console.log(result);

// 一番：次のブレークポイントまで処理を進める
// 二番：処理を一行進める（ステップオーバー）
// 三番：関数の中に入りたい場合（ステップイントゥ）
// 四番：関数の外に出たい場合（ステップアウト）
