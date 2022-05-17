function pyramid(balls) {
  for(let i = 1; i < 1000; ++i){
    if((0.5 * (i ** 2)) + (i / 2) > balls) return i - 1
  }
}
