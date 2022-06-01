function changer(str) { 
  let alphabet = "abcdefghijklmnopqrstuvwxyz".repeat(str.length*2)
  let arr = str.split("")
  
  for(let i = 0; i < arr.length; ++i){
    if(!/[a-z]/i.test(arr[i])) continue
    const cur = arr[i].toLowerCase()
    arr[i] = alphabet[alphabet.indexOf(cur) + 1]
    if(/[aeiou]/i.test(arr[i])){
      arr[i] = arr[i].toUpperCase()
    }else{
      arr[i] = arr[i].toLowerCase()
    }
  }
  
  return arr.join("")
}
