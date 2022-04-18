function DNAtoRNA(dna) {
  let final = "";
  dna.split("").map(function(v){
    if(v === "T"){
      {final = final.concat("U")}
    } else {
      final = final.concat(v)
    }
  })
  return final;
}
