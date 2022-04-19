function pattern(n){
  return [...Array(n)].map((v,i)=>`1${`*`.repeat(i)}${i<1?``:++i}`).join`\n`
}
