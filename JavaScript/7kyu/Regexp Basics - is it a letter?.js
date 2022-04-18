String.prototype.isLetter = function() {
  return /[a-z]/i.test(this) && this.length < 2
}
