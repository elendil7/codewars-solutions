function typeOfSum(a, b) {
  if(typeof(a)==`string`||typeof(b)==`string`) return `string`  
  return typeof(eval(`${a}+${b}`))
}
