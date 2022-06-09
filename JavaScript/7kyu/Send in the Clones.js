var clonewars = function(kataPerDay) {
  let clones = 1
  let count = 0
  
  while(kataPerDay > 0){
    count += clones * kataPerDay
    kataPerDay --
    clones *= 2
  }
  
  return [(x=>x<1?1:x)(clones/2), count]
}
