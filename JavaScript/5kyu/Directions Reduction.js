dirReduc=(a)=>{
  let c1 = "NORTHSOUTH"
  let c2 = "SOUTHNORTH"
  let c3 = "EASTWEST"
  let c4 = "WESTEAST"
    
  function process(){
    for(let i = 0; i < a.length-1; i++){
      const v = a[i]+a[i+1];
      if(v===c1 || v===c2 || v===c3 || v===c4){
        a.splice(i, 2)
        process();
        break;
      }
    }
  }
  process()
  return a;
}
