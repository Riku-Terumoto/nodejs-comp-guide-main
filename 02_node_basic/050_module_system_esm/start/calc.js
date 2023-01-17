function plus(a, b) {
  return a + b;
}
function minus(a, b) {
  return a - b;
}

// ESmoduleを使用する際はpackage.jsonに"type" : "module"を追加する
// そうすると、通常のexport,importがしようできる
// もう一つの方法は拡張子をmjsに変更するとESmoduleが使用できるようになる
export { plus, minus };
