function spongeMeme(sentence) {
  return [...sentence].map((v,i)=>i%2?v.toLowerCase():v.toUpperCase()).join``
}
