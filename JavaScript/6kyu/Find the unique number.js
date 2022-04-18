findUniq=a=>{
  if(a[0]==0 && a[a.length-1]==1) return 0;
  return [...new Set(a)][1]
}

//const t = a.sort()
//return t[0]

//for(let i = 0; i < a.length; i++){
//  if(i == 0 || i == a.length-1) continue;
//  if(a[i] != a[i-1] && a[i] != a[i+1]) return a[i]
//}
