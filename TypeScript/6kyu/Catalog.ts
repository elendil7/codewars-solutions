export function catalog(s: string, article: string): string {
  const catalogSplit = s.split("\n").filter(v=>v)
  let matches = []
  
  for(let i = 0; i < catalogSplit.length; ++i){
    const item = catalogSplit[i]
    if(item.includes(article)){
      matches.push(`${item.split("<name>")[1].split("</name>")[0]} > prx: $${item.split("<prx>")[1].split("</prx>")[0]} qty: ${item.split("<qty>")[1].split("</qty>")[0]}`)
    }
  }
  
  return matches.length>0 ? matches.join("\r\n") : "Nothing"
}
