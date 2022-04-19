function ipToInt32(ip){  
  let binary = ip.split(`.`).map(v=>(s=>`${`0`.repeat(8-s.length)}${s}`)((+v).toString(2))).join``  
  let num = 1
  let count = 0
  
  for(let i = binary.length - 1; i >= 0; --i){
    if(binary[i] == `1`) count += num
    num = num * 2
  }
  
  return count
}
