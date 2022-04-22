function reverse(n){
  let err = new TypeError(n)  
  return +[...err.message].reverse().join().replace(/,/g,err.message.slice(0,0))
}
