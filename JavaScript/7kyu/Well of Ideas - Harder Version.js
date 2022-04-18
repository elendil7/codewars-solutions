function well(arr){
  let count = 0;
  
  // for values in 1st array
  for(let x = 0; x < arr.length; x++){
    // for values in 2nd array
    for(let y = 0; y < arr[x].length; y++){
      if(/good/i.test(arr[x][y])) count++
    }
  }
  
  return count==1||count==2?`Publish!`:count>2?`I smell a series!`:`Fail!`
}

well=x=>(l=>l>2?`I smell a series!`:l==1||l==2?`Publish!`:`Fail!`)([].concat(...x).map(v=>String(v).replace(/good/i,`#`)).filter(v=>v==`#`).length)
