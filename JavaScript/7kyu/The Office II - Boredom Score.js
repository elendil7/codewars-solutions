function boredom(staff){
  let obj = {
    "accounts": 1,
    "finance": 2,
    "canteen": 10,
    "regulation": 3,
    "trading": 6,
    "change": 6,
    "IS": 8,
    "retail": 5,
    "cleaning": 4,
    "pissing about": 25
  }
  let total = 0
  
  for(let key in staff){
    total += obj[staff[key]]
  }
  
  return total<=80?`kill me now`:total<100?`i can handle this`:`party time!!`
}
