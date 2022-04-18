function solve(s){
  let arr = [...s]
  
  let upperCase = arr.filter(v=>/[a-z]/i.test(v)).filter(v=>v===v.toUpperCase()).length
  let lowerCase = arr.filter(v=>/[a-z]/i.test(v)).filter(v=>v===v.toLowerCase()).length
  let numbers = arr.filter(v=>/\d/.test(v)).length
  let special = arr.filter(v=>!/[a-z\d]/i.test(v)).length
  
  return [upperCase, lowerCase, numbers, special]
}
