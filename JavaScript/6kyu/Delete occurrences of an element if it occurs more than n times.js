function deleteNth(arr,n){    
  let obj = {}
  let numArr = [];
  for(let i in arr) {
    if(typeof arr[i] === "function") continue;
    if(obj[arr[i]] === undefined) obj[arr[i]] = 1;
    else obj[arr[i]] += 1
    if(obj[arr[i]] > n) continue;
    numArr.push(arr[i])
  }
  return numArr;
}
