function presses(phrase) {
  let obj = {
    "1":1,
    "A":1,
    "B":2,
    "C":3,
    "2":4,
    "D":1,
    "E":2,
    "F":3,
    "3":4,
    "G":1,
    "H":2,
    "I":3,
    "4":4,
    "J":1,
    "K":2,
    "L":3,
    "5":4,
    "M":1,
    "N":2,
    "O":3,
    "6":4,
    "P":1,
    "Q":2,
    "R":3,
    "S":4,
    "7":5,
    "T":1,
    "U":2,
    "V":3,
    "8":4,
    "W":1,
    "X":2,
    "Y":3,
    "Z":4,
    "9":5,
    " ":1,
    "0":2
  }
  
  let arr = [...phrase.toUpperCase()]
  
  return arr.map(v=>obj[v]).reduce((a,b)=>a+b)
}

presses=(p,o=`1ॱABC2ॱDEF3ॱGHI4ॱJKL5ॱMNO6ॱPQRS7ॱTUV8ॱWXYZ9ॱ ॱ 0`.split`ॱ`)=>[...p.toUpperCase()].reduce((a,b)=>a+o.filter((x,i)=>x.includes(b))[0].indexOf(b)+1,0)
