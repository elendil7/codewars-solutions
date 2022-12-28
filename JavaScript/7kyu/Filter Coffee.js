function search(budget, prices) {
  return prices.filter(v=>v<=budget).sort((a,b)=>a-b).join(",")
}
