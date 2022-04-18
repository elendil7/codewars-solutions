function getOrder(input) {
  console.log(input)
  
  let o = `ॱBurgerॱFriesॱChickenॱPizzaॱSandwichॱOnionringsॱMilkshakeॱCoke`.split`ॱ`
  let nums = []
  let temp = ``
  
  console.log(o)
  
  let arr = [...input]
  
  arr.map((v,i)=>{
    temp+=v
    if(o.includes(temp.toUpperCase().slice(0,1)+temp.slice(1))){
      nums.push(o.indexOf(temp.toUpperCase().slice(0,1)+temp.slice(1)))
      temp = ``
    }
  })
  
  nums.sort((a,b)=>a-b)
  
  return nums.map(v=>o[v]).join` `
}

getOrder=(s,o=`ॱBurgerॱFriesॱChickenॱPizzaॱSandwichॱOnionringsॱMilkshakeॱCoke`.split`ॱ`,n=[],t=``)=>{
  [...s].map((v,i)=>{
    t+=v
    return (x=>o.includes(x)?(n.push(o.indexOf(x)),t=``):0)(t.toUpperCase().slice(0,1)+t.slice(1))
  })
  return n.sort((a,b)=>a-b).map(v=>o[v]).join` `
}
