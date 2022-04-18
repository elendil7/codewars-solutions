function roundIt(n){
  let thing = (``+n).split`.`
  
  if(thing[0].length < thing[1].length){
    return Math.ceil(n)
  }else if(thing[0].length > thing[1].length){
    return ~~n
  }else{
    return Math.round(n)
  }
}
