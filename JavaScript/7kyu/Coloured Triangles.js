function triangle(row) {
  // define variable for storing all possible colours
  let colours = [..."RGB"]
  console.log("\n")
  
  // define recursive function for generating all the rows of colours
  function generateRows(curRow) {
    console.log(curRow)
    // if row length == 1 return it
    if(curRow.length === 1) return curRow
    // define variable for storing final row
    let constructedRow = ""
    // go through pairs of colours sequentially
    for(let i = 0; i < curRow.length - 1; ++i){
      const cur = [curRow[i], curRow[i+1]]
      const [first, second] = cur
      console.log(`First: `, first, "Second:", second)
      // if colours are identical, add the same colour to next row
      if(first === second) constructedRow += first
      // find missing colour, add it to the next row
      else if(!cur.includes("R")) constructedRow += "R"
      else if(!cur.includes("G")) constructedRow += "G"
      else if(!cur.includes("B")) constructedRow += "B"
    }
    // recurse
    return generateRows(constructedRow)
  }
  
  // return result of running recursive function, passing in the row for the first iteration.
  return generateRows(row)
}
