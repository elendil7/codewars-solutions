function workOnStrings(a,b,alphabet=`abcdefghijklmnopqrstuvwxyz`){
  // define function for processing both string A and B
  function switchCases(arr1, arr2){
    // string a AND b case swapping (depending on function input) (derived from character count of each letter in string a)
    // loop through all alphabet letters
    for(let i = 0; i < alphabet.length; ++i){
      const stringACharLength = arr2.filter(v=>v.toLowerCase()==alphabet[i]).length
      // swap the set number of times (defined above)
      for(let j = 0; j < stringACharLength; ++j){
        // for all chars in string b
        for(let x = 0; x < arr1.length; ++x){
          // define current character
          const currentChar = arr1[x]
          // check if current char is valid
            if(currentChar.toLowerCase() === alphabet[i].toLowerCase()){
              // if char is lowercase letter, swap to uppercase
              if(currentChar.toLowerCase() === currentChar){
                arr1[x] = currentChar.toUpperCase()
              // if char is uppercase letter, swap to lowercase
              }else{
                arr1[x] = currentChar.toLowerCase()
              }
            }
         }
      }
    }
    // return final mutated input (as output), as a string
    return arr1.join``
  }

  // return conjoined strings
  return switchCases([...a],[...b]) + switchCases([...b],[...a])
}
