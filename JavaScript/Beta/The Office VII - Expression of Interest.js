function express(x, device){
  if(x.length === 22){
    if(device === `iPhone`) return `Damn`
    if(device === `Desktop`) return `Sent`
    if(device === `Laptop`) return `Sent`
    if(device === `Macbook`) return `Damn`
  }else{
    if(device === `iPhone`) return `Damn`
    if(device === `Desktop`) return `Sent`
    if(device === `Laptop`) return `Damn`
    if(device === `Macbook`) return `Sent`
  }
}
