function solution(str,limit){
  return (truncatedStr => truncatedStr + (str===truncatedStr ? `` : `...`)) (str.slice(0, limit))
}
