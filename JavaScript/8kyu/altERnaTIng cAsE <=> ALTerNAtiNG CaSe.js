String.prototype.toAlternatingCase=function(){
  console.log(this)
  console.log(this.split("").map(v=>/[a-z]/i.test(v)===false?v:v.toUpperCase()===v?v.toLowerCase():v.toUpperCase()).join(""))
  return this.split("").map(v=>/[a-z]/i.test(v)===false?v:v.toUpperCase()===v?v.toLowerCase():v.toUpperCase()).join("")
}

String.prototype.toAlternatingCase=function(){return this.split("").map(v=>/[a-z]/i.test(v)===false?v:v.toUpperCase()===v?v.toLowerCase():v.toUpperCase()).join("")}
