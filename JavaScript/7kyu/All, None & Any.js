Array.prototype.all = function (p) {
  for(let i = 0; i < this.length; ++i){
    if(this[i] < 1) return false
  }
  return true
};

Array.prototype.none = function (p) {
  for(let i = 0; i < this.length; ++i){
    if(this[i] > 0) return false
  }
  return true
};

Array.prototype.any = function (p) {
  for(let i = 0; i < this.length; ++i){
    if(this[i] > 0) return true
  }
  return false
};
