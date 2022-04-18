mapOrder=(a,o,k)=>!Array.isArray(a)?[]:(l=>o.map(k=>l.get(k)))(a.reduceRight((t,o)=>t.set(o[k],o),new Map))
