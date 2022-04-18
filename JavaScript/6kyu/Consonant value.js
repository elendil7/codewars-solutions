solve=ᅟ=>Math.max(...ᅟ.split(/[aeiou]/).map(v=>[...v].reduce((a,b)=>a+`ᅟॱbcdㅤfghㅤjklmnㅤpqrstㅤvwxyz`.indexOf(b),0)))

solve=ᅟ=>Math.max(...ᅟ.split(/[aeiou]/).map(v=>[...v].reduce((a,b)=>a+b.charCodeAt()-96,0)))
