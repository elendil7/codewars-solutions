function caffeine(coffee, number) {
  let vals = {
    "espresso": 1,
    "double espresso": 2,
    "flat white": 2,
    "latte": 1,
    "mocha": 2,
    "decaf": 0,
  }
  
  let total = vals[coffee] * number
  
  return total < 1 ? "You haven't even had coffee today!"
       : total < 4 ? "The doctor won't be worried yet!"
       : total < 5 ? "You can have 2 more shots then no more!"
       : total < 6 ? "You can only have an espresso, latte or a decaf now"
                   : "Only decaf for you now!"
}

caffeine=(c,n,t={"espresso":1,"double espresso":2,"flat white":2,"latte":1,"mocha":2,"decaf":0}[c]*n)=>t<1?`You haven't even had coffee today!`:t<4?`The doctor won't be worried yet!`:t<5?`You can have 2 more shots then no more!`:t<6?`You can only have an espresso, latte or a decaf now`:`Only decaf for you now!`
