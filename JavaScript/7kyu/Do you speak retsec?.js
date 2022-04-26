function reverseByCenter(s){
  let mid = ~~(s.length/2)
  return s.length%2 ? s.slice(mid+1) + s[mid] + s.slice(0, mid) : s.slice(mid) + s.slice(0, mid)
}
