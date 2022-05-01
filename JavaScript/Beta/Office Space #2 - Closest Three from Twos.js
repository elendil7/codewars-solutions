function musicalOCD(volume) {
  if(volume < 1) return 0
  
  let volCopy = +(`` + volume)
  let left = 0
  let right = 0
  
  // for -
  for(let i = volume; i > 0; i-=2){
    if(i !== volume && i % 3 == 0) break
    left ++
  }
  
  // for +
  for(let i = volCopy; i < volCopy + 10000; i+=2){
    if(i !== volCopy && i % 3 == 0) break
    right ++
  }
  
  return (x=>x>1&&x<4?0:x)(Math.min(left, right))
}
