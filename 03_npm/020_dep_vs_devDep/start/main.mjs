import isOdd from 'is-odd'; //奇数か偶数かを判定するパッケージ

const result = isOdd(3);

console.log(result);

// package.jsonの中身
// dependencies・・・依存という意味
// その為dependencies内のis-oddがmain.mjsと依存関係であることを示している

// devDependencies・・・開発環境でも本番環境でも依存の関係であるという意味
