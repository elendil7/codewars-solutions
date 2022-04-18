function thirt(n) {
  let keys = `1 10 9 12 3 4 `.repeat(-~(((``+n).length)/6)).split` `.filter(v=>v)
  let arr = [...String(n)].reverse()
  let result = 0
  
  for(let i=0; i<arr.length; ++i){
    result+= +arr[i] * +keys[i]
  }
  
  if(result == n){
    return +result
  }else{
    return thirt(result)
  }
}

thirt=(n,a=[...``+n].reverse(),k=`1ॱ10ॱ9ॱ12ॱ3ॱ4ॱ`.repeat(5).split`ॱ`,r=0)=>{  
  for(i=0;i<a.length;++i)r+=a[i]*k[i]
  return n==r?r:thirt(r)
}

thirt=(n,k=`1ॱ10ॱ9ॱ12ॱ3ॱ4ॱ1ॱ10ॱ9ॱ12`.split`ॱ`,a=[...``+n].reverse().reduce((a,b,i)=>a+b*k[i],0))=>n==a?a:thirt(a)
