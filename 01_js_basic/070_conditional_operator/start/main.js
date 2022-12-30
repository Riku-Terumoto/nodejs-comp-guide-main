// 三項演算子（ ? : ）

const a = true;
// 三項演算子の条件は完全なるtrue,false以外だとtruthyな値かfalsyな値かでも決まる
// let resultA = a ? 'true' : 'false';
let resultA = a ? 10 : 10;

if (a) {
  resultA = 'true';
} else {
  resultA = 'false';
}
console.log(resultA);

function getResult() {
  return a ? 'true' : 'false';
}

// console.log(getResult());
