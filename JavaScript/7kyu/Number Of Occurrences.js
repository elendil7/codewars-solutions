Array.prototype.numberOfOccurrences = function(o) {
  return this.filter(v=>v==o).length
}
