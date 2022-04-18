String.prototype.vowel = function() {
  return /[aeiou]/i.test(this) && this.length < 2
}
