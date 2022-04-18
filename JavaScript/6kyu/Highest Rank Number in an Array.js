function highestRank(arr){  
  arr.sort((a,b)=>a-b)
  
  let result = []
  let temp = []
  
  for(i=0; i<arr.length; ++i){
    temp.push(arr[i])
    if(arr[i]!=arr[i+1] || i==arr.length-1){
      result.push(temp)
      temp = []
    }
  }
  
  let finalResult = [0]
  
  for(i=0; i<result.length; ++i){
    finalResult = finalResult.length==result[i].length ? (finalResult[0] > result[i][0] ? finalResult : result[i]) : finalResult.length > result[i].length ? finalResult : result[i]
  }
  
  return finalResult[0]
}

highestRank=(a,z=[0],r=[],t=[])=>{
  a.sort((a,b)=>a-b).map((v,i)=>t.push(a[i])&&a[i]!=a[i+1]|i==a.length-1?(r.push(t),t=[]):0)
  r.map((v,i)=>z=((l,m,n)=>l==m?z[0]>n[0]?z:n:l>m?z:n)(z.length,r[i].length,r[i]))
  return z[0]
}
