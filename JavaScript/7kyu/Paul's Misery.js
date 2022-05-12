function paul(x){
  let keys = {
    "kata": 5,
    "Petes kata": 10,
    "life": 0,
    "eating": 1
  }
  let r = x.reduce((a,b)=>a+keys[b],0)
  
  return (r < 40 ? `Super happy` : r < 70 ? `Happy` : r < 100 ? `Sad` : `Miserable`) + `!`
}
