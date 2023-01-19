// ライブラリのlodashをインポートする
// _はオブジェクトが格納された変数
// import _ from '../lib/lodash.js';

// npm install lodashすると以下importするだけで使えるようになる
import _ from 'lodash';
const original = { prop: { nested: 'value' } };
// オブジェクトの複製

// clonedは複製されてoriginalとは異なるオブジェクトになっている（どちらか一方を書き換えても両方に影響は出ない）
const cloned = _.cloneDeep(original);

cloned.prop.nested = 'new value';
console.log(original, cloned); // ↓
// MacBook-Pro:nodejs-comp-guide-main terumotoriku$ node '/Users/terumotoriku/GitHub/nodejs-comp-guide-main/03_npm/010_intro/start/main.mjs'
// { prop: { nested: 'value' } } { prop: { nested: 'new value' } }

// 上記のようにライブラリをわざわざダウンロードしてきてインポートする必要は無い
// 全てnpmで使える
