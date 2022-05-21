function iTri(s){
  if(s == 0) return `Starting Line... Good Luck!`
  if(s >= 140.6) return `You're done! Stop running!`
  if(s >= 130.6) return {"Run": "Nearly there!"}
  
  let triVals = {
    "Swim": 2.4,
    "Bike": 112,
    "Run": 26.2
  }
  
  let res = {}
  
  res[s<=2.4?"Swim":s<=114.4?"Bike":"Run"] = `${(140.6-s).toFixed(2)} to go!`
  
  return res
}
