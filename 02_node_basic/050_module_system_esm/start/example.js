// const { plus } = require('./calc');
import { plus } from './calc.js';
// defaultexportはimport名を任意で指定することができる
// アスタリスクasファイル名でexportしている関数を一括で取得できる
import minusFn, * as calc from './calc.js';
// console.log(calc);
// minusの関数が使える
const calcResult = calc.default(2, 3);
console.log(calcResult);

const result = plus(1, 2);
const result2 = minusFn(5, 4);
console.log(result);
console.log(result2);
