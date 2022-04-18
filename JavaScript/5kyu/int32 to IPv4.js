function int32ToIp(int32){
  const binary = int32.toString(2);
  if(binary == 0) return "0.0.0.0"
  console.log(binary)
  let tempStr = "";
  let finalStr = "";
  for(let i = binary.length-1; i >= 0; i--){
    tempStr = binary.charAt(i).concat(tempStr)
    if(i%8 === 0 || i === 0){
      console.log(`i: ${i}`)
      finalStr = `.${parseInt(tempStr, 2)}${finalStr}`
      console.log(tempStr)
      tempStr = ``
    }
  }
  return finalStr.slice(1)
}
