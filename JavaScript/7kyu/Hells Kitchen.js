function gordon(a){
  return a.toUpperCase().split` `.map(v=>v.replace(/a/ig,`@`).replace(/[aeiou]/ig,`*`) + `!!!!`).join` `
}
