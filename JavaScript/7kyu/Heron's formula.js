function heron(...args) {
  let s = args.reduce((a,b)=>a+b,0) / 2
  return (s * (s - args[0]) * (s - args[1]) * (s - args[2])) ** .5
}

heron=(...a)=>(s=>(s*(s-a[0])*(s-a[1])*(s-a[2]))**.5)(a.reduce((a,b)=>a+b,0)/2)
