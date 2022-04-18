function bouncingBall(h,  bounce,  window) {
  // edge cases
  if(h <= 0 || bounce <= 0 || bounce >= 1 || window > h) return -1;
  console.log(`Height: ${h}, Bounce: ${bounce}, Window: ${window}`)
  // initial ball drop (mother sees it)
  let count = 1;
  // keeps looping as long as height is greater than window
  while(h > window){
    count+=2
    h = h*bounce
  }
  return count-2;
}
