decodeMorse=c=>{  
  const morse = {
    ".-": "A",
    "-...": "B", 
    "-.-.": "C",
    "-..": "D",
    ".": "E",
    "..-.": "F",
    "--.": "G",
    "....": "H",
    "..": "I",
    ".---": "J",
    "-.-": "K",
    ".-..": "L",
    "--": "M",
    "-.": "N",
    "---": "O",
    ".--.": "P",
    "--.-": "Q",
    ".-.": "R",
    "...": "S",
    "-": "T",
    "..-": "U",
    "...-": "V",
    ".--": "W",
    "-..-": "X",
    "-.--": "Y",
    "--..": "Z",
    "-----": "0",
    ".----": "1",
    "..---": "2",
    "...--": "3",
    "....-": "4",
    ".....": "5",
    "-....": "6",
    "--...": "7",
    "---..": "8",
    "----.": "9",
    "...---...": "SOS",
    "/":" ",
    "-.-.--":"!",
    ".-.-.-":".",
    "--..--":","
  }
  
  let result = [], temp, count = 0
  
  let arr = c.trim().split(` `)
  
  for(let i = 0; i < arr.length; i++){
    temp = arr[i]
    if(count == 1){
      result.push(` `)
      count = 0
    }else if(morse[temp]){
      result.push(morse[temp])
    }else{
      count++
    }
  }
  
  return result.join(``)
}

// https://www.electronics-notes.com/articles/ham_radio/morse_code/characters-table-chart.php

decodeMorse=c=>{
  let result = [], temp, count = 0
  
  let arr = c.trim().split(` `)
  
  return c.trim().split` `.map(function(v,i,a){
    return v==`` && a[--i]==`` ? ` ` : MORSE_CODE[v]
  }).join(``)
}

decodeMorse=c=>c.trim().split` `.map((v,i,a)=>v==``&&a[--i]==``?` `:MORSE_CODE[v]).join``

decodeMorse=c=>c.split(/  | /).map(c=>MORSE_CODE[c]||' ').join``.trim()

decodeMorse=c=>c.trim().split(/  | /).map(c=>MORSE_CODE[c]||' ').join``
