function bandNameGenerator(str) {
  if(str[0] !== str[str.length-1]){
    return `The ${str.toUpperCase().slice(0,1) + str.toLowerCase().slice(1)}`
  }else{
    return `${str.toUpperCase().slice(0,1) + str.toLowerCase().slice(1) + str.slice(1)}`
  }
}
