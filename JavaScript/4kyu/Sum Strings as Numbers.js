sumStrings=(a,b)=>``+(BigInt(a)+BigInt(b))

c=BigInt,sumStrings=(a,b)=>c(a)+c(b)+""

c=BigInt,sumStrings=(a,b)=>`${c(a)+c(b)}`
