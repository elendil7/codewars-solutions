function driver(data) {  
  const [firstName, middleName, surname, dob, gender] = data
  const date = new Date(dob)
  let licenseNumber = ""
  
  // 1-5
  licenseNumber += surname.slice(0, 5).toUpperCase()
  if(surname.length < 5) licenseNumber += "9".repeat(5 - surname.length)
  
  // 6
  licenseNumber += (""+date.getFullYear())[2]
  
  // 7-8
  const month =('0'+(date.getMonth()+1)).slice(-2)
  if(gender == "F") licenseNumber += String(+month[0] + 5) + month.slice(1)
  else licenseNumber += month
  
  // 9-10
  licenseNumber += dob.split("-")[0]
  
  // 11
  licenseNumber += (""+date.getFullYear())[3]
  
  // 12-13
  licenseNumber += `${firstName[0]}${middleName[0] || "9"}`
  
  // 14
  licenseNumber += "9"
  
  // 15-16
  licenseNumber += "AA"
  
  return licenseNumber
}
