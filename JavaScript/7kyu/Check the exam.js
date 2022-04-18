checkExam=(a,b)=>{
  console.log(a, b)
  
  console.log(a.map((v,i)=>v==""?0:v==b[i]?4:-1))
  console.log(a.map((v,i)=>v==""?0:v==b[i]?4:-1).reduce((a,b)=>a+b))
  
  return Math.max(b.map((v,i)=>v===""?0:v==a[i]?4:-1).reduce((a,b)=>a+b), 0)
}

checkExam=(a,b)=>Math.max(b.map((v,i)=>v==""?0:v==a[i]?4:-1).reduce((a,b)=>a+b),0)
