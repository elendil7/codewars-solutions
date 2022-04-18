findDigit=(x,n)=>n<1?-1:(~~(``+Math.abs(x)).split``.filter(v=>~~v==v).reverse().join``[--n])||0

findDigit=(n,m)=>m<=0?-1:m<=(n=Math.abs(n)+"").length?+n.split("").reverse()[m-1]:0

findDigit=(x,n)=>n>0?[...``+x].filter(v=>v).reverse()[--n]|0:-1

findDigit=(x,n)=>n>0?[...``+x].reverse()[--n]|0:-1
