function getRandomInRange(min, max) {
  let arr = Array.from(Array(max-min+1).keys()).map((v,i)=>min+i)
  return arr[~~(Math.random()*arr.length)]
}

getRandomInRange=(a,b)=>(a=>a[~~(Math.random()*a.length)])([...Array(++b-a)].map((v,i)=>a+i))
