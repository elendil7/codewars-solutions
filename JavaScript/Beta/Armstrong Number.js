function armstrong(num){
  if(typeof(num)==`string`) return false
  if(num==0||num==1) return true
  return num == [...``+num].map(v=>v**3).reduce((a,b)=>a+b,0)
}
