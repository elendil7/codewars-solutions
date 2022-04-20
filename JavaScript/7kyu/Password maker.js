function makePassword(phrase) {
  phrase = phrase.split` `.map(v=>v[0]).join``
  phrase = phrase.replace(/i/ig,`1`)
  phrase = phrase.replace(/o/ig,`0`)
  phrase = phrase.replace(/s/ig,`5`)
  
  return phrase
}
