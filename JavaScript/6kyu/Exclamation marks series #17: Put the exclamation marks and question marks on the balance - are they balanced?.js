function balance(left,right){  
  let a = (x=>x.length*2 + (left.length - x.length) * 3)(left.split``.filter(v=>v==`!`))
  let b = (x=>x.length*2 + (right.length - x.length) * 3)(right.split``.filter(v=>v==`!`))
  return a<b?`Right`:a>b?`Left`:`Balance`
}
