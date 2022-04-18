function whatNumberIsIt(n){
  if(isNaN(n)) return `Input number is Number.NaN`
  
  let str = `Input number is Number.${n==Number.MAX_VALUE?`MAX_VALUE`:n==Number.MIN_VALUE?`MIN_VALUE`:n==Number.NEGATIVE_INFINITY?`NEGATIVE_INFINITY`:n==Number.POSITIVE_INFINITY?`POSITIVE_INFINITY`:``}`
  
  return str.length<24 ? `Input number is ${n}` : str
}
