function getAges(sum,difference){
  if(sum < 0 || difference < 0) return null
  if((sum - difference)/2 < 0 || (sum + difference)/2 < 0) return null
  
  return [(sum - difference)/2, (sum + difference)/2].sort((a,b)=>b-a)
}
