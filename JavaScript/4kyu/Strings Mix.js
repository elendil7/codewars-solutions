function mix(s1, s2) {
  /* Explanation */
  /*
    // Description of Task
    - Given 2 strings (s1 and s2), we want to visualize how different the two strings are.
    - We shall take into account the string's lowercase letters from [ a - z ].
    
    - Firstly, count the frequency of each lowercase letter (character) in both s1 and s2.
      E.g., s1 = "A aaaa bb c": s1 has 4 'a', 2 'b', 1 'c'
            s2 = "& aaa bbb c d": s2 has 3 'a', 3 'b', 1 'c', 1 'd'
      As you can see above, the maximum times the letter "a" appears in either string is 4 in s1,
      whilst the maximum times the letter "b" appears in either string is 3 in s2.
    - If the total occurrence of the letter in either string is <= 1, we shall not consider it (must appear > 1 times).
    
    - The differences between chars appearing in s1 and s2 can be constructed with the following string:
      "1:aaaa/2:bbb"
      where 1 in "1:aaaa" stands for s1 (as the maximum times the char "a" appeared in either strings is 4 times in s1).
      in a similar manner, "2:bbb" stands for s2, as the maximum times the char "b" appeared in either strings is 3 times in s2.
      
    - Thus, the task is to produce a string where each lowercase letter of s1 or s2 appears as many times as its maximum,
      permitting that this maximum is strictly > 1.
    - Each substring will be constructed in such a way (as shown above) that:
        - the first character is the string in which the maximum chars appears (s1 or s2 respectively), followed by a ":"
        - if the maximum char appearance count is the same in s1 and s2, the prefix changes from ":" to "=:"
    - In the final result, the substrings will be sorted in decreasing order of their length.
      However, when 2 substrings have the same length, they shall instead be sorted in ascending lexicographical order
      (letters and digits).
    - Each substring will be separated by a definitive and unfluctuating "/".
  */
  
  /* Implementation */
  // define variables
  let alphabet = `abcdefghijklmnopqrstuvwxyz`
  let temp = ``
  let result = []
  
  // for each letter of the lowercase alphabet
  for(let i = 0; i < alphabet.length; ++i){
    // if s1 or s2 includes the letter
    if(s1.includes(alphabet[i]) || s2.includes(alphabet[i])){
      // get total times current character appears in both strings
      const howManyTimesCharAppearsInS1 = [...s1].filter(v=>v===alphabet[i]).length
      const howManyTimesCharAppearsInS2 = [...s2].filter(v=>v===alphabet[i]).length
      // if total times character appears in either string is > 1, proceed with next steps
      if(howManyTimesCharAppearsInS1 > 1 || howManyTimesCharAppearsInS2 > 1){
        // if character appears identical number of times in both strings
        if(howManyTimesCharAppearsInS1 === howManyTimesCharAppearsInS2){
          temp += `=:`
        // if character appears more times in s1 than s2
        }else if(howManyTimesCharAppearsInS1 > howManyTimesCharAppearsInS2){
          temp += `1:`
        // if character appears more times in s1 than s2
        }else{
          temp += `2:`
        }
        // concatenate the repeated letters (the amount of times they appeared in the string) to temp string
        temp += alphabet[i].repeat(Math.max(howManyTimesCharAppearsInS1, howManyTimesCharAppearsInS2)) 
        // push current finalized string to result array
        result.push(temp)
        // reset temporary string variable to empty
        temp = ``
      }
    }
  }
  
  // sort the string according to rules defined in "explanation" near the top of page
  result.sort((a,b)=>{
    // if both pairs are of same length, sort lexiographically (only letters & digits in ascending order)
    if(a.length === b.length){
      // get letters & digits of both pairs, by removing the colon and/or equals sign (=, :)
      const filteredA = [...a].filter(v=>/[a-z\d]/.test(v)).join``
      const filteredB = [...b].filter(v=>/[a-z\d]/.test(v)).join``
      return filteredA.localeCompare(filteredB)
    // otherwise, sort by length (highest to lowest)
    }else{
      return b.length - a.length
    }
  })
    
  // log values
  console.log(s1, s2)
  console.log(result)
  
  // return final result, joined with proper separator
  return result.join`/`
}

mix=(x,y)=>[...`abcdefghijklmnopqrstuvwxyz`].map(v=>x+y.includes(v)&&((j,k)=>j<2&k<2?``:`${j==k?`=`:j>k?1:2}:${v.repeat(Math.max(j,k))}`)([...x].filter(z=>z==v).length,[...y].filter(z=>z==v).length)).filter(v=>v).sort((a,b)=>b.length-a.length||a.replace(/[=:]/g,``).localeCompare(b.replace(/[=:]/g,``))).join`/`
