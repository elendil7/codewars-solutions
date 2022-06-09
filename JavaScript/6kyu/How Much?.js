function howmuch(m, n) {
  /*
    // * Description
    We do not know how much money John has. Thats it.
  */
  
  // * Implementation
  // log values
  console.log(m, n)
  
  // define variables
  let results = []
  
  // for all values from m to n
  for(let x = Math.min(m,n); x <= Math.max(m,n); ++x){
    // found the formulae, LETS GO GET IT!!!
    // c = (x - 1) / 9
    // b = (x - 2) / 7
    // if both c and b are whole integer (non-decimal) numbers (it works), push appropriate array of values into results array.
    let NineC = (x - 1)
    let SevenB = (x - 2)
    if(NineC % 9 == 0 && SevenB % 7 == 0){
      results.push([`M: ${x}`, `B: ${SevenB / 7}`, `C: ${NineC / 9}`])
    }
  }
  
  console.log(results)
  
  return results
}

howmuch=(m,n,r=[])=>[...Array(Math.max(m,n)-Math.min(m,n)+1)].map((v,i)=>Math.min(m,n)+i).filter(v=>!((v-1)%9)&!((v-2)%7)).map(v=>[`M: ${v}`,`B: ${(v-2)/7}`,`C: ${(v-1)/9}`])
