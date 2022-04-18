function titleCase(title, minorWords) {
  return title
  .split(" ")
  .map(function(v,i){
    if(minorWords != undefined && minorWords.toLowerCase().split(" ").includes(v.toLowerCase()) && i != 0) return v.toLowerCase();
    return v.toUpperCase().slice(0,1) + v.toLowerCase().slice(1)
  })
  .join(" ")
}
