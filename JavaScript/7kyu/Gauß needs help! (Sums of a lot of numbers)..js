function f(n){
  if(parseInt(n) !== n || n < 1) return false
  return Array.from(Array(Math.floor(n)).keys()).map(v=>v+1).reduce((a,b)=>a+b)
}

f=n=>parseInt(n)!==n||n<1?false:Array.from(Array(Math.floor(n)).keys()).map(v=>v+1).reduce((a,b)=>a+b)

f=n=>parseInt(n)!==n||n<1?false:Array.from(Array(0|n).keys()).map(v=>v+1).reduce((a,b)=>a+b)

f=n=>parseInt(n)!==n||n<1?false:new Array(0|n).fill(0|n).map((v,i)=>v-i).reduce((a,b)=>a+b)

f=n=>parseInt(n)==n&&n>1?new Array(0|n).fill(0|n).map((v,i)=>v-i).reduce((a,b)=>a+b):false

f=n=>parseInt(n)==n&&n>1?Array(0|n).fill(0|n).map((v,i)=>v-i).reduce((a,b)=>a+b):false

f=n=>~~n&&n>0&n*10==n+`0`?Array(n).fill(n).map((v,i)=>v-i).reduce((p,c)=>p+c):!1

f=n=>parseInt(n)==n&&n>1?n/2*(n+1):false

f=n=>~~n==n&&n>1?n/2*(n+1):false

f=n=>~~n==n&n>1?n/2*(n+1):false

f=n=>~~n==n&n>0?n/2*++n:false

f=n=>~~n==n&n>0?n/2*++n:!1
