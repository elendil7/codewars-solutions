function whoseBicycle(diary1, diary2, diary3) {  
  let results = {"first": 0, "second": 0, "third": 0}, chosenSon
  
  for(const [subject,grade] of Object.entries(diary1)){
    results["first"] += diary1[subject]
    results["second"] += diary2[subject]
    results["third"] += diary3[subject]
  }
  
  for(const [currentSon,grade] of Object.entries(results)){
    if(!chosenSon) chosenSon = currentSon
    if(results[chosenSon] === results[currentSon]){
      if(ageTable[`${chosenSon}SonAge`] > ageTable[`${currentSon}SonAge`]) chosenSon = currentSon
      // else do nothing, as the chosen son remains the chosen son
    }else if(results[chosenSon] < results[currentSon]) chosenSon = currentSon
  }
  
  console.log(ageTable)
  console.log(diary1,diary2,diary3)
  console.log(results)
  console.log(chosenSon)
  
  return `I need to buy a bicycle for my ${chosenSon} son.`
}
