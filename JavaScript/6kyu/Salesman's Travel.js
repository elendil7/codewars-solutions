function travel(r, zipcode) {
  /* Explanation */
  /*
    // * Description
    - A travelling salesman wishes to visit his clients. He has each client's address in the following format:
      432 Main Long Road St. Louisville OH 43071
    - The zipcode typically consists of 2 capital letters, followed by a space, then 5 digits. E.g., OH 43071.
    - The list of clients is given in string format, separated by commas.
      E.g., `123 Main Street St. Louisville OH 43071,432 Main Long Road St. Louisville OH 43071,
            786 High Street Pollocksville NY 56432`.
    - To ease his travel, the salesman wishes to group the list by zipcode.
    
    // * Task
    - Complete the function travel(r, zipcode), given 2 parameters:
      r: address list of all clients in string format
      zipcode: zipcode string
    - The street numbers must remain in the same order as the streets to which they belong.
    - If the zipcode does not exist in the list of client addresses, return "zipcode:/"
  */
  
  /* Implementation */
  // edge cases
  if(!zipcode || zipcode.length < 7) return `${zipcode}:/`
  
  // define variables
  let addresses = r.split`,`
  let results = []
  let houseNumbers = []
  
  // loop through addresses (checking for zipcode)
  for(let i = 0; i < addresses.length; ++i){
    // if address includes postcode, push address (excluding house number) to results array
    if(addresses[i].includes(zipcode)){
      results.push(`${addresses[i].split` `.slice(1, -2).join` `}`)
    }
  }
  
  // loop through addresses (getting house number)
  for(let i = 0; i < addresses.length; ++i){
    // if address includes specified postcode
    if(addresses[i].includes(zipcode)){
      // get house number, concat to houseNumbers array
      houseNumbers.push(addresses[i].split` `[0])
    }
  }
  
  // log values
  //console.log(zipcode)
  //console.log(addresses)
  
  // if no addresses exist, return zipcode
  if(addresses.length < 1) return `${zipcode}:/`
  // return address(es) joined by commas, then concatenate with house numbers, then slice final comma off the end
  return `${zipcode}:${results.join`,`}/${houseNumbers.join`,`}`
}
