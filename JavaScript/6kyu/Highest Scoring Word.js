const high=(x)=>{
  console.log(x)
  const a = "abcdefghijklmnopqrstuvwxyz".split("")
  let highest = {word: null,score: null};
  x.split(" ").map(function(v){
    let temp = {word: "", score: null};
    for(let i = 0; i < v.length; i++){
      temp.word+=v.charAt(i)
      temp.score+=a.indexOf(v.charAt(i).toLowerCase())+1
    }
    if(temp.score > highest.score) highest = temp;
    temp = {word: "", score: null};
  })
  return highest.word;
}

const high=(x)=>{let highest = {word: null,score: null};x.split(" ").map(function(v){let temp = {word: "", score: null};for(let i = 0; i < v.length; i++){temp.word+=v.charAt(i);temp.score+="abcdefghijklmnopqrstuvwxyz".split("").indexOf(v.charAt(i).toLowerCase())+1;}if(temp.score > highest.score) highest = temp;temp = {word: "", score: null};})
  return highest.word;
}
