function alienLanguage(str){
  return str.split` `.map(v=>[...v].map((x,i,a)=>i<a.length-1?x.toUpperCase():x.toLowerCase()).join``).join` `
}
