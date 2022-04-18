function toCamelCase(str){  
  let splitter = str.includes(`_`)?`_`:`-`
  return str.split(splitter).map((v,i)=>i<1?v:v.slice(0,1).toUpperCase()+v.slice(1)).join``
}

toCamelCase=s=>s.split(s.includes`_`?`_`:`-`).map((v,i)=>i<1?v:v.slice(0,1).toUpperCase()+v.slice(1)).join``

toCamelCase=s=>s.split(/_|-/g).map((v,i)=>i<1?v:v.slice(0,1).toUpperCase()+v.slice(1)).join``
