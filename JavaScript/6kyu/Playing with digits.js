const digPow=(n,p)=>{
  let r = n.toString().split("").map((v,i)=>Math.pow(v,i+p)).reduce((a,b)=>a+b)/n;
  return Number.isInteger(r)?r:-1;
}
