function number2words(n){  
  // edge cases
  if(n == 0) return "zero"
  
  // split number by every 3 numbers
  let grouped = n.toLocaleString().split(",")
  
  // define ones (0 - 20) (unique numbers)
  let ones = {
    "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine", "10": "ten",
    "11": "eleven", "12": "twelve", "13": "thirteen", "14": "fourteen", "15": "fifteen", "16": "sixteen", "17": "seventeen", "18": "eighteen", "19": "nineteen", "20": "twenty"
  }
  
  // define tens (10 - 100)
  let tens = {
    "1": "ten", "2": "twenty", "3": "thirty", "4": "forty", "5": "fifty", "6": "sixty", "7": "seventy", "8": "eighty", "9": "ninety"
  }
  
  // define hundreds ()
  let hundreds = {
    "1": "one", "2": "two", "3": "three", "4": "four", "5": "five", "6": "six", "7": "seven", "8": "eight", "9": "nine"
  }
  
  // log values
  console.log(n)
  console.log(grouped)
  
  // define count
  let count = grouped.length
  // define result array
  let res = []
  
  // convert number to words
  for(let i = 0; i < grouped.length; ++i){
    // get current number
    let cur = grouped[i]
    
    console.log(cur)
    
    // remove leading zeroes from cur
    cur = ``+parseInt(cur, 10)
    
    console.log(cur)

    // if the number is made of 3 digits (100,000s or 100s)
    if(cur.length === 3){
      // get hundreds
      let temp1 = hundreds[cur[0]]
      // get tens / ones
      let temp2 = ""
      
      // remove leading zeroes from cur (again)
      let curTens = ``+parseInt(cur.slice(1), 10)
      
      console.log(cur)
      
      // if number is < 20
      if(+curTens < 20){
        // push correct one to res array
        temp2 = ones[curTens]
      }else{
        // if number is not an exact ten, push tens and ones to results array (with "-" concatenation)
        if(curTens[1] != 0){
          temp2 = `${tens[curTens[0]]}-${ones[curTens[1]]}`
        // otherwise, just push the tens
        }else{
          temp2 = tens[curTens[0]]
        }
      }
      
      // push final product to res
      res.push(`${temp1} hundred${temp2==undefined?"":` ${temp2}`}`)
      
    // if the number is made of 2 digits (10,000s or 10s)
    }else if(cur.length === 2){
      // if number is < 20
      if(+cur < 20){
        // push correct one to res array
        res.push(ones[cur])
      }else{
        // if number is not an exact ten, push tens and ones to results array (with "-" concatenation)
        if(cur[1] != 0){
          res.push(`${tens[cur[0]]}-${ones[cur[1]]}`)
        // otherwise, just push the tens
        }else{
          res.push(`${tens[cur[0]]}`)
        }
      }
    // if the number is made of 1 digits (1,000s or 1s)
    }else{
      // if number is not 0
      if(cur != 0){
        res.push(ones[cur])
      }
    }
    // add "thousand" if the number is over 1000.
    if(i === 0 && grouped.length === 2) res.push("thousand")
  }
  
  console.log(res)
  
  // return joined result array
  return res.join(" ")
}
