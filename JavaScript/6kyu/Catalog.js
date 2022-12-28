function catalog(s, article) {
  // split catalog line by line
  const catalogSplit = s.split("\n").filter(v=>v)
  // define array for storing formatted strings containing the details of the matched articles
  let matches = []
  
  // loop through items in catalog
  for(let i = 0; i < catalogSplit.length; ++i){
    // get current item
    const item = catalogSplit[i]
    // check if article is inside current item
    if(item.includes(article)){
      // push formatted string containing details of matched article
      matches.push(`${item.split("<name>")[1].split("</name>")[0]} > prx: $${item.split("<prx>")[1].split("</prx>")[0]} qty: ${item.split("<qty>")[1].split("</qty>")[0]}`)
    }
  }
  
  // return formatted string with item name, price, and quantity of EACH matched article string, separated by newline.
  // if matches array is empty return nothing
  return matches.length>0 ? matches.join("\r\n") : "Nothing"
}
