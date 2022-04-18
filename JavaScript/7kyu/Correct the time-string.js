function timeCorrect(timestring) {
  // edge cases
  if(!timestring || timestring.length < 1) return timestring
  if(timestring.split`:`.length !== 3) return null
  if(/[a-z]/ig.test(timestring)) return null
  
  // variables
  let arr = timestring.split`:`.reverse()
  
  for(let i = 0; i < arr.length; ++i){
    // if current time is in minutes or seconds (60)
    if(i < 2){
      // if time is broken (seconds / minutes greater than max possible)
      if(arr[i] > 59){
        // set time to remainder of time / 60, adding 0 to the front if result is a single digit
        arr[i] = (v=>v<10?`0${v}`:v)(Math.abs(arr[i] % 60))
        // add 1 to the next time value
        arr[i+1] ++
      }
    // if current time is in hours (24)
    }else{
      // if time is broken (hours greater than max possible)
      if(arr[i] > 23){
        // set time to remainder of time / 24, adding 0 to the front if result is a single digit
        arr[i] = (v=>v<10?`0${v}`:v)(Math.abs(arr[i] % 24))
      }
    }
  }
  
  // return time string
  return arr.reverse().join`:`
}
