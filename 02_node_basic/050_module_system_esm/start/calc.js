function plus(a, b) {
  return a + b;
}

// defaultexportは一ファイル一つに設定できる（ファイル自体に設定することも可能）
export default function minus(a, b) {
  return a - b;
}

// ESmoduleを使用する際はpackage.jsonに"type" : "module"を追加する
// そうすると、通常のexport,importがしようできる
// もう一つの方法は拡張子をmjsに変更するとESmoduleが使用できるようになる
export { plus, minus };
