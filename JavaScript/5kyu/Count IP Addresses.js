function ipsBetween(start, end){
  const [s1, s2, s3, s4] = start.split(".")
  const [e1, e2, e3, e4] = end.split(".")
  return  16777216*(e1-s1) + 65536*(e2-s2) + 256*(e3-s3) + 1*(e4-s4)
}

ipsBetween=(x,y,[a,b,c,d,e,f,g,h]=x.concat(`.`+y).split`.`)=>16777216*(e-a)+65536*(f-b)+256*(g-c)+(h-d)
