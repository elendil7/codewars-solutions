function stringBreakers(n, string){
  string = string.replace(/\s/g, ``)
  let arr = []
  
  for(let i = 0; i < string.length; ++i){
    if((i+1) % n === 0) arr.push(string.slice(i-n+1,i+1))
    else if(i === string.length - 1) arr.push(string.slice(string.length-(i%n)-1))
  }
  
  return arr.join("\n")
}
