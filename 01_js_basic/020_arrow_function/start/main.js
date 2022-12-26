function fn(number) {
  return number * 2;
}

// 関数式、無名関数
const fn2 = function (number) {
  return number * 2;
};

console.log(fn2(2));

// アロー関数 (省略形)
const fnAroow = number => number * 2;

// アロー関数 (省略なし)
const fnAroow2 = number => {
  console.log(number);
  return number * 2;
}

// オブジェクトを返却する時にアロー関数を省略すると波括弧が関数のブロックと重複してしまい、文法的によろしくない
// そのような場合は、丸括弧で囲う
const fnArrowObj = number => ({ result: number * 2 });

console.log(fnAroow(2));
