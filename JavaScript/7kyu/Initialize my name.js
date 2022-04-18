function initializeNames(name){
  return name.split` `.map((v,i,a)=>i<1||i==a.length-1?v:`${v[0]}.`).join` `
}
