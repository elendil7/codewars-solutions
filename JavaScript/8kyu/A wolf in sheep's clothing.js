function warnTheSheep(q) {
  let message = "";
  q.reverse().map(function(v,i,a){
    if(v=="wolf" && a[i-1] === "sheep") return message=`Oi! Sheep number ${i}! You are about to be eaten by a wolf!`
    else if(v=="wolf") return message=`Pls go away and stop eating my sheep`
  })
  return message;
}
