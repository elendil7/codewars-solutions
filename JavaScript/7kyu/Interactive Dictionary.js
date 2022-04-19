class Dictionary {
  constructor() {
    this.dict = {}
  }
  
  newEntry(key, value) {
    this.dict[key] = value
  }
  
  look(key) {
    return this.dict[key] ? this.dict[key] : `Can't find entry for ${key}`
  }
}
