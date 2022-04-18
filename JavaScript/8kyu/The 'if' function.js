function _if(bool, func1, func2) {
  return bool==true?func1():func2()
}

_if=(v,a,b)=>v?a():b()
