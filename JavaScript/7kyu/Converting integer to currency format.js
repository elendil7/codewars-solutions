function toCurrency(price){
  price = String(price)
  
  let count = 0
  let res = ""
  
  for(let i = price.length-1; i >= 0; --i){
    count ++
    res += price[i]
    if(count % 3 === 0){
      res += ","
    }
  }
  
  return (x=>x[0]==","?x.slice(1):x)([...res].reverse().join(""))
}
