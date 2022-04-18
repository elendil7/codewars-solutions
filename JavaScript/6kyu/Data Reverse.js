function dataReverse(data) {
  let res = []
  for(let i = 0; i < data.length; i++){
    if((i+1)%8==0){
      res = data.slice(i-7,i+1).concat(res)
    }
  }
  return res
}

// return d.slice(24).concat(d.slice(16,24),d.slice(8,16),d.slice(0,8))
