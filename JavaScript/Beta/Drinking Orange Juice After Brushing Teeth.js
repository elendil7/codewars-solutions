function calcWaitForOJ(flavor, amount) {  
  let vals = {
    "Minty-Fresh": 37,
    "Lemon-Sage": 15,
    "Fruit-Fusion": 24
  }
  return `It's safe to drink OJ ${(x=>x<1|!x?`now`:`after ${x} minutes`)(Math.round(vals[flavor] * amount))}.`
}
