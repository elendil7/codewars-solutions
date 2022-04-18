function upArray(arr){
  // edge cases
  if(arr.length==0 || arr.filter(v=>v>9||v<0).length) return null
  
  // add array values to string
  let reduced = arr.reduce((a,b)=>String(a)+String(b),0)
  // increment string by 1
  let num = incrementString(reduced)
  
  // remove leading 0 (if exists)
  num = num[0] == 0 ? num.slice(1) : num
  
  // return num string as array
  return [...``+num].map(v=>+v)
}

incrementString=(s,a=[...s],z=0,l=a.length,r=/\d/)=>{
  if(!r.test(a[l-1]))return s+1
  for(i=--l;i>-1;--i){
    if(a[i]<9){a[i]++;return a.join``}
    if(!r.test(a[i]))return a.join``
    p=_=>{if(a[i] == 9){a[i]=`0`;i--;p()}else{if(r.test(a[i])){a[i]++;z=1}else{a.splice(++i,0,1);z=1}}};p()
    if(z)return a.join``
  }
}
