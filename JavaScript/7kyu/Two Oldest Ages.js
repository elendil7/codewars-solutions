function twoOldestAges(ages){
  return [ages.sort((a,b)=>b-a)[1],ages[0]]
}
