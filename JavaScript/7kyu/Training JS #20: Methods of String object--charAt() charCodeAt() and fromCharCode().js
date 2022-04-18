function topSecret(str){
  let alphabet = `abcdefghijklmnopqrstuvwxyz`.repeat(str.length)  
  return str.split` `.map(v=>[...v].map(x=>/[a-z]/ig.test(x)?(z=>x==x.toUpperCase()?z.toUpperCase():z.toLowerCase())(alphabet[alphabet.lastIndexOf(x.toLowerCase())-3]):x).join`` ).join` `
}
//question1: The top secret file number is...
answer1="2833";
//question2: Super agent's name is...
answer2="FKItZW";
//question3: He stole the treasure is...
answer3="John's wife";
