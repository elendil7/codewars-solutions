calculateTip=(a,b,r=b.toLowerCase())=>(x=>x==``?`Rating not recognised`:Math.ceil(x))(r==`excellent`?a*.2:r==`great`?a*.15:r==`good`?a*.1:r==`poor`?a*.05:r==`terrible`?0:``)
