function arrayLeaders(numbers){
  let results = []
    
  for(let i=0; i<numbers.length; ++i){
    if((i==numbers.length-1 && numbers[i] > 0) || numbers[i] > numbers.slice(i+1).reduce((a,b)=>a+b,0)) results.push(numbers[i])
  }
  
  return results
}

arrayLeaders=ᅟ=>ᅟ.map((v,i)=>v>ᅟ.slice(++i).reduce((a,b)=>a+b,0)?v:`ᅠ`).filter(v=>v!=`ᅠ`)

arrayLeaders=ᅟ=>ᅟ.filter((ᅠ,ㅤ)=>ᅠ>ᅟ.slice(++ㅤ).reduce((ᅟ,ㅤ)=>ᅟ+ㅤ,0))
