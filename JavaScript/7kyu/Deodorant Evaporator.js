function evaporator(content, evap_per_day, threshold){

  let evap = evap_per_day/100
  let thresh = content*(threshold/100)
  
  let count = 0;
  
  while(content>thresh){
    content = content-(content*evap)
    count++
  }
  return count
}

evaporator=(c,e,t)=>{
  let a=e/100,b=c*t/100,r=0
  while(c>b){c=c-c*a,r++}
  return r
}
