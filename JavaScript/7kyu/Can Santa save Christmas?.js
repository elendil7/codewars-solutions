function determineTime (durations) {
  let totalTimeInSeconds = 0
  
  for(let i = 0; i < durations.length; ++i){
    const currentDuration = durations[i]
    const arr = currentDuration.split`:`
    totalTimeInSeconds += +arr[0] * 3600
    totalTimeInSeconds += +arr[1] * 60
    totalTimeInSeconds += +arr[2]
  }
  
  return totalTimeInSeconds < 86401
}
