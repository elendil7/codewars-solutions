function golfScoreCalculator(parList, scoreList){
  return [...scoreList].reduce((a,b,i)=>a+(b-parList[i]),0)
}
