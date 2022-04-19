function borrow(s){
  return [...s.toLowerCase()].filter(v=>!`?!,."';: `.includes(v)).join``
}
