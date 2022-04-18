class Ship {
  constructor(draft, crew){
    this.draft = draft;
    this.crew = crew;
  }
  
  isWorthIt() {
    return this.crew*1.5+20<this.draft?true:false
  }
}
