function periodIsLate(last, today, cycleLength){
  return Math.abs(last.getTime() - today.getTime()) / 864e5 > cycleLength
}
