generateHashtag=s=>!/[a-z]/ig.test(s)?!1:(x=>x.length>140?!1:x)(`#`+ s.split` `.map(v=>v.toUpperCase().slice(0,1)+v.slice(1)).join` `.replace(/ /g,''))
