function wordSearch(query, seq){
  return (a=>a.length!==seq.length&&a.length>0?a:[`Empty`]) (seq.filter(v=>v.toLowerCase().includes(query.toLowerCase())))
}
