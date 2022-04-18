calculateAge=(y,n)=>n-y<0?`You will be born in ${y-n} ${y-n==1?`year`:`years`}.`:n-y==0?`You were born this very year!`:`You are ${n-y} ${n-y==1?`year`:`years`} old.`

calculateAge=(y,n)=>n-y<0?`You will be born in ${y-n} year${y-n==1?``:`s`}.`:n-y==0?`You were born this very year!`:`You are ${n-y} year${n-y==1?``:`s`} old.`
