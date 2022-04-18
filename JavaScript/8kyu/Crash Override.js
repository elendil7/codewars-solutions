function aliasGen(name1, name2, ...args){
  if(!/[a-z]/i.test(name1[0]) || !/[a-z]/i.test(name2[0])) return `Your name must start with a letter from A - Z.`
  return `${firstName[name1[0].toUpperCase()]} ${surname[name2[0].toUpperCase()]}`
}
