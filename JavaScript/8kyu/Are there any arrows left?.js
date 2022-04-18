function anyArrows(arrows){
  return arrows.some(v=>v.damaged === false || !v.damaged)
}
