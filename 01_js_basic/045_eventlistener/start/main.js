const h1Element = document.querySelector('h1');

console.log(h1Element);
// console.dir();はオブジェクト形式でタグを取得できる
// DOMはhtmlをjavascript内で操作する意味を持つ
console.dir(h1Element);
console.log(h1Element.textContent);
h1Element.textContent = '変更後のタイトル';

const btnEl = document.querySelector('button');
const helloFn = (e) => {
  console.log(e.target.textContent);
  console.log('hello');
};
btnEl.addEventListener('click', helloFn);

// btnEl.addEventListener('click', (e) => {
//   console.log(e);
//   console.log(e.target.textContent);
//   console.log('hello');
// });
