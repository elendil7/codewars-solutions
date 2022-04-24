function cubeSum(n, m){
  let cubes = []
  
  let inputs = [Math.min(n,m), Math.max(n,m)]
  
  for(let i = inputs[0]+1; i <= inputs[1]; ++i){
    cubes.push(i**3)
  }
  
  return cubes.reduce((a,b)=>a+b,0)
}
