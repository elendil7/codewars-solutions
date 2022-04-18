function HQ9(code) {
  if(!`HQ9`.includes(code)) return
  
  let song = ``
  
  for(let i = 99; i >= 0; --i){
    if(i > 1){
      song += `${i} bottles of beer on the wall, ${i} bottles of beer.\nTake one down and pass it around, ${i-1} bottle${i-1>1?`s`:``} of beer on the wall.\n`
    }else if(i === 1){
      song += `${i} bottle of beer on the wall, ${i} bottle of beer.\nTake one down and pass it around, no more bottles of beer on the wall.\n`
    }else{
      song += `No more bottles of beer on the wall, no more bottles of beer.\nGo to the store and buy some more, 99 bottles of beer on the wall.`
    }
  }
  
  return code==`H`?`Hello World!`:code==`Q`?code:code==9?song:null
}
