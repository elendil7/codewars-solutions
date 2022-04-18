function moveTen(s){
  let alphabet = `abcdefghijklmnopqrstuvwxyz`.repeat(1000)
  return [...s].map(v=>alphabet[alphabet.indexOf(v)+10]).join``
}
