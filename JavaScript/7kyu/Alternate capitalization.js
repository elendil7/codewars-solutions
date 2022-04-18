function capitalize(s){
  return [s.split("").map((v,i)=>i%2?v:v.toUpperCase()).join(""),s.split("").map((v,i)=>i%2?v.toUpperCase():v).join("")]
};
