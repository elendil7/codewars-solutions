function modifyMultiply (str,loc,num) {
  return (str.split(" ")[loc] + "-").repeat(num).slice(0,-1)
} 
