const highAndLow = nums =>{
  return [Math.max(...nums.split(" ")), Math.min(...nums.split(" "))].join(" ")
}
