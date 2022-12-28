function magNumber(info){  
  const rounds = {
    PT92: 17,
    M4A1: 30,
    M16A2: 30,
    PSG1: 5 
  }
  
  const bulletsPerMag = rounds[info[0]]
  const streets = info[1]
  const totalBulletsRequired = streets * 3
  
  return Math.ceil(totalBulletsRequired / bulletsPerMag)
}
