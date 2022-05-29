function bitsBattle(nums) {
  nums = nums.filter(v=>v)
  
  let odds = nums.filter(v=>v%2).map(v=>v.toString(2)), evens = nums.filter(v=>v%2==0).map(v=>v.toString(2))
  let oddsSum = odds.join("").replace(/0/g,"").length, evensSum = evens.join("").replace(/1/g,"").length
  
  return oddsSum > evensSum ? "odds win" : evensSum > oddsSum ? "evens win" : "tie"
}
