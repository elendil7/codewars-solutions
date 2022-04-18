jumpingNumber=n=>[...(``+n)].every((v,i,a)=>i==a.length-1|Math.abs(v-a[++i])<2)?`Jumping!!`:`Not!!`

jumpingNumber=n=>[...``+n].every((v,i,a)=>i==a.length-1|Math.abs(v-a[++i])<2)?`Jumping!!`:`Not!!`
