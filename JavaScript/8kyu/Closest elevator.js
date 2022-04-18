function elevator(left, right, call){
  return Math.max(left,call)-Math.min(left,call)<Math.max(right,call)-Math.min(right,call)?`left`:`right`
}

elevator=(l,r,c)=>Math.abs(l-c)<Math.abs(r-c)?`left`:`right`
