function vowel2index(str) {
  return [...str].map((v,i)=>/[aeiou]/i.test(v)?++i:v).join``
}
