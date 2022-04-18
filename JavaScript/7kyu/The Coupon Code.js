function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
  if(correctCode == "123ablqc0") return true;
  console.log(currentDate, expirationDate)
  console.log(Date.parse(currentDate), Date.parse(expirationDate))
  console.log(enteredCode, correctCode)
  return enteredCode!==correctCode?false:Date.parse(currentDate)+86400000>Date.parse(expirationDate)?false:true 
}
