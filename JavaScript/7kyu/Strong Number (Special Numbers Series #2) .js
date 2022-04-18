function strong(n) {
  function getFactorial(num){
    if(num<0){
      return -1
    }else if(num==0){
      return 1
    }else{
      return (num * getFactorial(num - 1))
    }
  }
    
  let arr = [...String(n)].map(v=>getFactorial(+v))
  
  return arr.reduce((a,b)=>a+b) == n ? "STRONG!!!!" : "Not Strong !!"
}

strong=n=>[...``+n].reduce((a,b)=>a+(x=>g(b))(g=n=>n<1?1:(n*g(--n))),0)==n?`STRONG!!!!`:`Not Strong !!`

strong=ㅤ=>[...``+ㅤ].reduce((ᅠ,ㅤ)=>ᅠ+(ᅟ=>ᅠ(ㅤ))(ᅠ=ᅟ=>ᅟ<1?1:(ᅟ*ᅠ(--ᅟ))),0)==ㅤ?`STRONG!!!!`:`Not Strong !!`
