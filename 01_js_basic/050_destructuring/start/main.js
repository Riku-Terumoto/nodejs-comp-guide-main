// 配列の分割代入
// constで宣言したブラケット内に変数を格納し、格納した順番と配列の順番が同じ値を抜き出す
// const [a, b, c] = ['配列1', '配列2', '配列3'];
// console.log(a);
// console.log(c);

// オブジェクトの分割代入
// オブジェクトの場合はプロパティで管理されているので、記載する順番は関係なく、プロパティを抽出する感覚
// 抽出したプロパティを格納する変数名と実際のオブジェクトのプロパティ名は一致している必要がある（順不同）
// const { x, z } = { x: 'オブジェクト1', y: 'オブジェクト2', z: 'オブジェクト3' };
// console.log(x);
// console.log(z);

const arr = ['Japan', 'Tokyo', 'Shinjuku'];
const objAddress = { country: 'Japan', state: 'Tokyo', city: 'Shinjuku' };

const fnArr = ([country, state, city]) => {
  console.log('---配列---');
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

const fnObj = ({ country, state, city }) => {
  console.log('---オブジェクト---');
  console.log(`country: ${country}`);
  console.log(`state: ${state}`);
  console.log(`city: ${city}`);
};

// fnArr(arr);
fnObj(objAddress);
