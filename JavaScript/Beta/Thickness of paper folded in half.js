paperThickness=(p,n,x=1e3,y=1e6)=>n<1?`${(p<x?p:p<y?p/x:p/y).toFixed(2)} ${(p<x?`m`:p>y?`k`:``)}m`:paperThickness(p*2,--n)

paperThickness=(p,n,x=1e3,y=1e6,z=p*2**n)=>`${(z<x?z:z<y?z/x:z/y).toFixed(2)} ${(z<x?`m`:z>y?`k`:``)}m`

paperThickness=(_,ॱ,ㅤ=1e3,ᅠ=1e6,ᅟ=_*2**ॱ)=>`${(ᅟ<ㅤ?ᅟ:ᅟ<ᅠ?ᅟ/ㅤ:ᅟ/ᅠ).toFixed(2)} ${ᅟ<ㅤ?`m`:ᅟ>ᅠ?`k`:``}m`
