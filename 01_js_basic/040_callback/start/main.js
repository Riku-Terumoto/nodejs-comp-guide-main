function print(callback) {
  const result = callback(2);
  console.log(result);
}

function fn(number = 3) {
    return number * 2;
}

// debuggerと記述すると11行目でコードが止まる
// debugger;

// 関数を渡しているだけで実行はしていない
// そのため丸括弧と引数は必要なし
print(fn);
  
  // console.log(fn(2));
  // console.log(fn(4));
  
  // const fnArrow = number => {
  //   console.log(number);
  //   return number * 2;
  // };
  
  // const fnArrowObj = number => ({ result: number * 2 })
  
  // console.log(fnArrowObj(2));