export const spinWords=(words:string)=>words.split(" ").map(v=>v[4]?[...v].reverse().join(""):v).join(" ")
