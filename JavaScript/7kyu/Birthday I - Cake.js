function cake(x, y){
  let z = `_abcdefghijklmnopqrstuvwxyz`  
  return ([...y].reduce((a,b,i)=>+a+(i%2?z.indexOf(b):b.charCodeAt()),0) / x) * 100 >= 70 ? `Fire!` : `That was close!`
}

cake=(ㅤ,ᅟ)=>([...ᅟ].reduce((ㅤ,ᅟ,ᅠ)=>+ㅤ+(ᅠ%2?`ㅤabcdefghijklmnopqrstuvwxyz`.indexOf(ᅟ):ᅟ.charCodeAt()),0)/ㅤ)*100>=70?`Fire!`:`That was close!`
