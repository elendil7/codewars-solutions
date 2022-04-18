function checkerboard (size) {
  let board = ``
  
  for(let i=0; i<size; ++i){
    for(let x=0; x<size; ++x){
      i%2?board+=x%2?`[r]`:`[b]`:board+=x%2?`[b]`:`[r]`
    }
    board+=`\n`
  }

  return board
}

checkerboard=(s,b=``)=>{for(i=0;i<s;++i){for(x=0;x<s;++x){i%2?b+=x%2?`[r]`:`[b]`:b+=x%2?`[b]`:`[r]`}b+=`\n`};return b}
