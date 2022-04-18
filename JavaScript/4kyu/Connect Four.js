function whoIsWinner(positions){
  // check if you have 4 in a row
  function checkIfConnectFour(a,b,c,d){
    return a!=0 & a==b & a==c & a==d
  }
  
  // variables
  let grid = [
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0],
    [0,0,0,0,0,0,0]
  ]
  let keys = [...`ABCDEFG`]
  let column, currentPos, count;
  
  // board filler (for each move)
  for(let i=0;i<positions.length;++i){
    // get current position and column index
    currentPos = positions[i]
    column = keys.indexOf(currentPos.charAt(0))
    // for all rows in checkers grid
    for(let x=0;x<7;++x){
    // if grid position is empty
      if(grid[x][column] == 0){
        // insert colour (Yellow or Red) into slot, break loop
        grid[x][column] = positions[i].slice(2)
        break;
      }
    }
    
    // validate grid; check for winner (after each move)
    // check rows & columns
    for (a=0; a<3; ++a){
      for (b=0; b<7; ++b){
        if (checkIfConnectFour(grid[a][b], grid[a+1][b], grid[a+2][b], grid[a+3][b])) return grid[a][b];
      }
    }
    for (a=0; a<6; ++a){
      for (b=0; b<4; ++b){
        if (checkIfConnectFour(grid[a][b], grid[a][b+1], grid[a][b+2], grid[a][b+3])) return grid[a][b]
      }
    }
    // check diagonals
    for (a=0; a<3; ++a){
      for (b=0; b<4; ++b){
        if (checkIfConnectFour(grid[a][b], grid[a+1][b+1], grid[a+2][b+2], grid[a+3][b+3])) return grid[a][b]
      }
    }
    for (a=3; a<6; ++a){
      for (b=0; b<4; ++b){
        if(checkIfConnectFour(grid[a][b], grid[a-1][b+1], grid[a-2][b+2], grid[a-3][b+3])) return grid[a][b]
      }
    }
  }
  
  // if there are no winners, with all the moves used up, return draw.
  return `Draw`
}

whoIsWinner=p=>{
  z=(a,b,c,d)=>a!=0&a==b&a==c&a==d
  g=[[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0],[0,0,0,0,0,0,0]]
  for(i=0;i<p.length;++i){
    c=`ABCDEFG`.indexOf(p[i].charAt(0))
    for(let x=0;x<7;++x)if(g[x][c]==0){g[x][c]=p[i].slice(2);break}
    for(a=0;a<3;++a)for(b=0;b<7;++b)if(z(g[a][b],g[a+1][b],g[a+2][b],g[a+3][b]))return g[a][b]
    for(a=0;a<6;++a)for(b=0;b<4;++b)if(z(g[a][b],g[a][b+1],g[a][b+2],g[a][b+3]))return g[a][b]
    for(a=0;a<3;++a)for(b=0;b<4;++b)if(z(g[a][b],g[a+1][b+1],g[a+2][b+2],g[a+3][b+3]))return g[a][b]
    for(a=3;a<6;++a)for(b=0;b<4;++b)if(z(g[a][b],g[a-1][b+1],g[a-2][b+2],g[a-3][b+3]))return g[a][b]
  }
  return`Draw`
}

whoIsWinner=(p,g=[Array(7),Array(7),Array(7),Array(7),Array(7),Array(7)],z=(a,b,c,d)=>!!a&a==b&a==c&a==d)=>{
  for(i=0;i<p.length;++i){
    c=`ABCDEFG`.indexOf(p[i].charAt(0))
    for(x=0;x<7;++x)if(!g[x][c]){g[x][c]=p[i].slice(2);break}
    for(a=0;a<3;++a)for(b=0;b<7;++b)if(z(g[a][b],g[a+1][b],g[a+2][b],g[a+3][b]))return g[a][b]
    for(a=0;a<6;++a)for(b=0;b<4;++b)if(z(g[a][b],g[a][b+1],g[a][b+2],g[a][b+3]))return g[a][b]
    for(a=0;a<3;++a)for(b=0;b<4;++b)if(z(g[a][b],g[a+1][b+1],g[a+2][b+2],g[a+3][b+3]))return g[a][b]
    for(a=3;a<6;++a)for(b=0;b<4;++b)if(z(g[a][b],g[a-1][b+1],g[a-2][b+2],g[a-3][b+3]))return g[a][b]
  }
  return`Draw`
}
