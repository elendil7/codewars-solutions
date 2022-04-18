function stat(str) {
  if(!str || str.length<1) return ``  
  
  let arr = str.split(/, |,/), temp, middle = ~~(arr.length/2)
  let arrInSeconds = arr.map(v=>{
    temp = v.split(`|`)
    return +temp[0]*3600 + +temp[1]*60 + +temp[2]
  })
  
  arrInSeconds.sort((a,b)=>a-b)
  
  let range = Math.max(...arrInSeconds) - Math.min(...arrInSeconds)
  let average = arrInSeconds.reduce((a,b)=>a+b)/arrInSeconds.length
  let median;
  if(arrInSeconds.length%2==0){
    median = (arrInSeconds[middle-1]+arrInSeconds[middle])/2
  }else{
    median = arrInSeconds[middle] 
  }
  
  function convertToHours(seconds){
    return new Date(seconds * 1000).toISOString().substr(11, 8).replace(/:/g,`|`)
  }
  
  return `Range: ${convertToHours(range)} Average: ${convertToHours(average)} Median: ${convertToHours(median)}`
}

stat=s=>{
  if(!s) return ``  
  
  let arr = s.split(/, |,/)
  let arrInSeconds = arr.map(v=>{
    return (x=>+x[0]*3600+ +x[1]*60+ +x[2])(v.split`|`)
  })
  let temp
  let middle = ~~(arr.length/2)
  
  arrInSeconds.sort((a,b)=>a-b)
  
  let range = Math.max(...arrInSeconds) - Math.min(...arrInSeconds)
  let average = arrInSeconds.reduce((a,b)=>a+b)/arrInSeconds.length
  let median;
  if(arrInSeconds.length%2==0){
    median = (arrInSeconds[middle-1]+arrInSeconds[middle])/2
  }else{
    median = arrInSeconds[middle] 
  }
  
  function convertToHours(seconds){
    return new Date(seconds * 1000).toISOString().substr(11, 8).replace(/:/g,`|`)
  }
  
  return `Range: ${convertToHours(range)} Average: ${convertToHours(average)} Median: ${convertToHours(median)}`
}

c=s=>new Date(s*1e3).toISOString().substr(11,8).replace(/:/g,`|`)
stat=(s,x=s.split(/, |,/).map(v=>(f=>+f[0]*3600+ +f[1]*60+ +f[2])(v.split`|`)).sort((a,b)=>a-b),l=x.length,y=~~(l/2),r=Math.max(...x)-Math.min(...x),a=x.reduce((a,b)=>a+b)/l,m=l%2?x[y]:(x[y-1]+x[y])/2)=>!s?``:`Range: ${c(r)} Average: ${c(a)} Median: ${c(m)}`

c=s=>new Date(s*1e3).toISOString().substr(11,8).replace(/:/g,`|`);stat=(s,x=s.split(/, |,/).map(v=>(f=>+f[0]*3600+ +f[1]*60+ +f[2])(v.split`|`)).sort((a,b)=>a-b),l=x.length,y=~~(l/2),r=Math.max(...x)-Math.min(...x),a=x.reduce((a,b)=>a+b)/l,m=l%2?x[y]:(x[y-1]+x[y])/2)=>!s?``:`Range: ${c(r)} Average: ${c(a)} Median: ${c(m)}`
