function moveVowel(input) {
  let arr = [...input]
  let vowels = []
  
  for(let i = 0; i < arr.length; ++i){
    if(/[aeiou]/ig.test(arr[i])){
      vowels.push(arr[i])
      arr[i] = ""
    }
  }
  
  return arr.concat(vowels).join("")
}
