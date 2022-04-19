function evenLast(numbers) {
  if(numbers.length < 1 || !numbers) return 0  
  return numbers.reduce((a,b,i)=>a + (i%2?0:b),0) * numbers[numbers.length - 1]
}
