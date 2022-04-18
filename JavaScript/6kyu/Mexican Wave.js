function wave(str){
  let arr = [];
  for(let i = 0; i < str.length; i++){
    if(str.charAt(i) === " ") continue;
    let value = str.slice(0, i) + str.charAt(i).toUpperCase() + str.slice(i+1, str.length)
    arr.push(value)
  }
  return arr;
}

const wave=str=>{let e=[];for(let t=0;t<str.length;t++){if(" "===str.charAt(t))continue;let r=str.slice(0,t)+str.charAt(t).toUpperCase()+str.slice(t+1,str.length);e.push(r)}return e};
