function chain(input, fs) {
  let output = fs[0](input)
  
  for(let i = 1; i < fs.length; ++i){
    output = fs[i](output)
  }
  
  return output
}
