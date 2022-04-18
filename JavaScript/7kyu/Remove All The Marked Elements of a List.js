Array.prototype.remove_ = function(integer_list, values_list){
  return integer_list.filter(v=>!values_list.includes(v))
}
