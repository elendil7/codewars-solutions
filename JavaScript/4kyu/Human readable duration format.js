function formatDuration (secs) {  
  // edge cases
  if(secs == 0) return `now`
  
  // get various time measurements from seconds (all the while removing a set amount of seconds, for the next measurement to be accurate)
  let years = ~~(secs / 31536000)
  secs -= years * 31536000
  let days = ~~(secs / 86400)
  secs -= days * 86400
  let hours = ~~(secs / 3600) % 24
  secs -= hours * 3600
  let minutes = ~~(secs / 60) % 60
  secs -= minutes * 60
  let seconds = secs % 60
  
  // define final variables for conversion (parsing) of data above into human readable format
  let currentTimeType = `year,day,hour,minute,second`.split`,`
  let arr = [years, days, hours, minutes, seconds]
  let finalArr = []
  
  // for all time values stored in above array
  for(let i = 0; i < arr.length; ++i){
    // if value is a positive integer
    if(arr[i] > 0){
      // push to array (add s if number greater than 1)
      finalArr.push(`${arr[i]} ${currentTimeType[i]}${arr[i]>1?`s`:``}`)
    }
  }
    
  // * Return Human Readable String
  // if array has more than 1 items in it 
  if(finalArr.length > 1){
    // remove final comma (,) and insert "and"
    return [...[...finalArr.join`, `].reverse().join``.replace(/,/, `dna `)].reverse().join``
  }else{
    return finalArr.join`, `
  }
}

formatDuration=(s,z=`year,day,hour,minute,second`.split`,`,e=31536000,f=86400,g=3600,h=60)=>{  
  if(s<1)return`now`;l=~~(s/e),s-=l*e,m=~~(s/f),s-=m*f,n=~~(s/g)%24,s-=n*g,o=~~(s/h)%h,s-=o*h,y=[l,m,n,o,s%60];return(a=>a[1]?[...[...a.join`, `].reverse().join``.replace(/,/, `dna `)].reverse().join``:a.join`, `)(y.map((v,i)=>v>0?`${y[i]} ${z[i]}${y[i]>1?`s`:``}`:0).filter(v=>v))
}
