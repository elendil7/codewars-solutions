function twoDecimalPlaces(num) {
  let arr = `` + num
  let firstPart = arr.split`.`[0]
  let secondPart = arr.split`.`[1]
  
  return +(firstPart + `.` + secondPart.slice(0,2))
}
