// 非同期処理（await/async）・・・Promiseの書き方を更に簡略化した記述方
let a = 0;

init();
async function init() {
  try {
    // awaitをすることでsetTimeoutが終わるまで次の処理は始まらなくなる
    await new Promise((resolve, reject) => {
      setTimeout(() => {
        a = 1;
        // resolve(a);
        reject(a);
      }, 2000);
    });
    console.log(a);
  } catch (e) {
    // await/asyncでcathcみたいなことをしたい場合は、try/catchを使用する
    console.log('catchが実行', c);
  }
  //   .catch((c) => {
  //   });
}
