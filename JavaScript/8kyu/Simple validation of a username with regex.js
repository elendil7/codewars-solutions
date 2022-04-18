function validateUsr(u) {
  if(u.length<4||u.length>16) return false;
  for(let i = 0; i < u.length; i++){
    if(/[a-z]/.test(u[i])==false&&/[0-9]/.test(u[i])==false&&/[_]/.test(u[i])==false){
      return false;
    }
  }
  return true;
}

validateUsr=u=>/^[0-9a-z_]{4,16}$/.test(u)
