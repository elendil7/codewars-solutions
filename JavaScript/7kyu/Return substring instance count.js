function solution(fullText, searchText){
  let regex = new RegExp(searchText,`g`)
  return (fullText.length - fullText.replace(regex, ``).length) / searchText.length
}
