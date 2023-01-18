// CJSとESM間のモジュール連携
// OK: CJS -> ESM
// NG: ESM -> CJS

// const { plus } = require('./calc');
import calc from './calc.cjs';
console.log(calc);
// const result = minusFn(1, 2);
// console.log(result);
