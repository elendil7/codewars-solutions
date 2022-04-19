function calcType(a, b, res) {
  if(a+b === res) return `addition`
  if(a-b === res) return `subtraction`
  if(a*b === res) return `multiplication`
  if(a/b === res) return `division`
}
