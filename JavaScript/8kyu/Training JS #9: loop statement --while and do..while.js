function padIt(str,n){
  // do while
  return `*`.repeat(Math.ceil(n/2)) + str + `*`.repeat(~~(n/2))
}
