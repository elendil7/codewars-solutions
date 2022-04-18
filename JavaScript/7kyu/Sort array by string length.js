function sortByLength (arr) {
  // bubble sort
  
  // variables
  let count = 0;
  
  // while array is not filtered, keep looping
  while(count < arr.length){
    for(let i = 0; i < arr.length-1; i++){      
      if(arr[i].length > arr[i+1].length){
        let temp =  arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
      }else{
        count++
      }
    }
    if(count == arr.length-1) return arr;
    // reset count
    count = 0;
  }
  return arr;
};

function sortByLength (arr) {
  return arr.sort((a,b)=>a.length-b.length)
};
