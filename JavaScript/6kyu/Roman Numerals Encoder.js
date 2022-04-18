function solution(number){
  var numerals = {M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1}
  let result = []
  
  while(number > 0){
    if(number >= 1000){
      result.push(`M`.repeat(Math.floor(number/1000)))
      number -= Math.floor(number / 1000) * 1000
    }else if(number >= 900){
      result.push(`CM`.repeat(Math.floor(number/900)))
      number -= Math.floor(number / 900) * 900
    }else if(number >= 500){
      result.push(`D`.repeat(Math.floor(number/500)))
      number -= Math.floor(number / 500) * 500
    }else if(number >= 400){
      result.push(`CD`.repeat(Math.floor(number/400)))
      number -= Math.floor(number / 400) * 400
    }else if(number >= 100){
      result.push(`C`.repeat(Math.floor(number/100)))
      number -= Math.floor(number / 100) * 100
    }else if(number >= 90){
      result.push(`XC`.repeat(Math.floor(number/90)))
      number -= Math.floor(number / 90) * 90
    }else if(number >= 50){
      result.push(`L`.repeat(Math.floor(number/50)))
      number -= Math.floor(number / 50) * 50
    }else if(number >= 40){
      result.push(`XL`.repeat(Math.floor(number/40)))
      number -= Math.floor(number / 40) * 40
    }else if(number >= 10){
      result.push(`X`.repeat(Math.floor(number/10)))
      number -= Math.floor(number / 10) * 10
    }else if(number >= 9){
      result.push(`IX`.repeat(Math.floor(number/9)))
      number -= Math.floor(number / 9) * 9
    }else if(number >= 5){
      result.push(`V`.repeat(Math.floor(number/5)))
      number -= Math.floor(number / 5) * 5
    }else if(number >= 4){
      result.push(`IV`.repeat(Math.floor(number/4)))
      number -= Math.floor(number / 4) * 4
    }else if(number >= 1){
      result.push(`I`.repeat(Math.floor(number/1)))
      number -= Math.floor(number / 1) * 1
    }
  }
  
  return result.join``
}

solution=(n,z=[1000,900,500,400,100,90],r=[])=>{
  while(n>0){
    if(n>=z[0])r.push(`M`.repeat(~~(n/z[0]))),n-=~~(n/z[0])*z[0]
    else if(n>=z[1])r.push(`CM`.repeat(~~(n/z[1]))),n-=~~(n/z[1])*z[1]
    else if(n>=z[2])r.push(`D`.repeat(~~(n/z[2]))),n-=~~(n/z[2])*z[2]
    else if(n>=z[3])r.push(`CD`.repeat(~~(n/z[3]))),n-=~~(n/z[3])*z[3]
    else if(n>=z[4])r.push(`C`.repeat(~~(n/z[4]))),n-=~~(n/z[4])*z[4]
    else if(n>=90)r.push(`XC`.repeat(~~(n/90))),n-=~~(n/90)*90
    else if(n>=50)r.push(`L`.repeat(~~(n/50))),n-=~~(n/50)*50
    else if(n>=40)r.push(`XL`.repeat(~~(n/40))),n-=~~(n/40)*40
    else if(n>9)r.push(`X`.repeat(~~(n/10))),n-=~~(n/10)*10
    else if(n>8)r.push(`IX`.repeat(~~(n/9))),n-=~~(n/9)*9
    else if(n>4)r.push(`V`.repeat(~~(n/5))),n-=~~(n/5)*5
    else if(n>3)r.push(`IV`.repeat(~~(n/4))),n-=~~(n/4)*4
    else r.push(`I`.repeat(~~(n/1))),n-=~~(n/1)
  }
  return r.join``
}

solution=((e,p=[1e3,900,500,400,100,90],r=[])=>{for(;e>0;)e>=p[0]?(r.push("M".repeat(~~(e/p[0]))),e-=~~(e/p[0])*p[0]):e>=p[1]?(r.push("CM".repeat(~~(e/p[1]))),e-=~~(e/p[1])*p[1]):e>=p[2]?(r.push("D".repeat(~~(e/p[2]))),e-=~~(e/p[2])*p[2]):e>=p[3]?(r.push("CD".repeat(~~(e/p[3]))),e-=~~(e/p[3])*p[3]):e>=p[4]?(r.push("C".repeat(~~(e/p[4]))),e-=~~(e/p[4])*p[4]):e>=90?(r.push("XC".repeat(~~(e/90))),e-=90*~~(e/90)):e>=50?(r.push("L".repeat(~~(e/50))),e-=50*~~(e/50)):e>=40?(r.push("XL".repeat(~~(e/40))),e-=40*~~(e/40)):e>9?(r.push("X".repeat(~~(e/10))),e-=10*~~(e/10)):e>8?(r.push("IX".repeat(~~(e/9))),e-=9*~~(e/9)):e>4?(r.push("V".repeat(~~(e/5))),e-=5*~~(e/5)):e>3?(r.push("IV".repeat(~~(e/4))),e-=4*~~(e/4)):(r.push("I".repeat(~~(e/1))),e-=~~(e/1));return r.join``});
