function alphabetWar(f){
  let arr = f.split("")
  let points = {
    left: [`s`,`b`,`p`,`w`],
    right: [`z`,`d`,`q`,`m`]
  }
  
  let middle = Math.floor(arr.length/2)
  
  let left = arr.slice(0, middle)
  let right = arr.slice(middle)
  
  let pointsLeft = 0;
  let pointsRight = 0;
  
  // calculate all points
  for(let i = 0; i < arr.length; i++){
    if(points.left.includes(arr[i])) pointsLeft+=points.left.indexOf(arr[i])+1
    if(points.right.includes(arr[i])) pointsRight+=points.right.indexOf(arr[i])+1
  }
  
  // return winner
  return pointsLeft==pointsRight?`Let's fight again!`:pointsLeft<pointsRight?`Right side wins!`:`Left side wins!`
}
