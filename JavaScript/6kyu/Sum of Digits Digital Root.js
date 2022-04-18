function digital_root(n) {  
  if(n.toString().length > 1) {
    n = (""+n).split("").reduce((a,b) => parseInt(a) + parseInt(b), 0);
    return digital_root(n)
  } else return n;
}

digital_root=(n,s=``+n)=>s[1]?digital_root([...s].reduce((a,b)=>+a+ +b)):+s
