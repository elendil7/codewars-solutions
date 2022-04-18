function findScreenHeight(width, ratio) {
  let ratioArr = ratio.split`:`
  return `${width}x${width/ratioArr[0] * ratioArr[1]}`
}
