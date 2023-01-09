// 非同期処理（Promise）・・・順番通りに処理が行われないもの
let a = 0;
console.log(a);

new Promise((resolve, reject) => {
  setTimeout(() => {
    a = 1;
    resolve(a);
    // reject();
  }, 2000);
})
  .then((b) => {
    console.log(b);
  })
  .catch(() => {
    console.log('catchが実行');
  });
