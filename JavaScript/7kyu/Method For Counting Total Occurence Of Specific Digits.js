function List(){
  this.countSpecDigits=function(integersList, digitsList){
    const digits = [... integersList.join("")].map(v=>+v)
    return digitsList.map(v=>[v, digits.filter(x=>x===v).length])
  }
}
