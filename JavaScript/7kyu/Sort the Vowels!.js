function sortVowels(s){
  if(!s||typeof(s)==`number`) return ``
  return [...s].map(v=>/[aeiou]/ig.test(v)?`|${v}`:`${v}|`).join`\n`
}
