function solution(num){  
  if(num < 1) return 0
  
  let result = []
  
  let arr = Array.from(Array(num).keys())
  
  for(i=0;i<arr.length;++i){
    if(arr[i] % 3 === 0 || arr[i] % 5 === 0){
      result.push(arr[i])
    }
  }
  
  return result.reduce((a,b)=>a+b)
}

solution=(n,x=n<0?-5:Array(n).fill(n).map((v,i)=>i%3==0||i%5==0?i:``).filter(v=>v))=>n<1|``+n==``?0:``+x==``?0:x.reduce((a,b)=>a+b)

solution=n=>n<1?0:Array.from(Array(n),(v,i)=>i%3==0|i%5==0?i:0).reduce((a,b)=>a+b)

solution=n=>n<1?0:[...Array(n)].map((v,i)=>i%3==0|i%5==0?i:0).reduce((a,b)=>a+b)
