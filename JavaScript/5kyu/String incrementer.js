const incrementString=(s)=>{  
  // if string does not end with a number
  if(!/\d/.test(s[s.length-1])) return s+1
  
  // variable assignment
  let arr = s.split``
  let thing = false
  
  // if string already ends with a number
  // for each value of array (backwards)
  for(let i = arr.length-1; i >= 0; --i){
    // if number is less than 9
    if(arr[i] < 9){
      // return incremented string
      arr[i] ++
      return arr.join``
    }
    
    // if current array value is a letter
    if(!/\d/.test(arr[i])){
      // return string
      return arr.join``
    }
        
    // recursive function
    function process(){
      // if current value is 9
      if(arr[i] == 9){
        // set its value to 0
        arr[i] = `0`
        // decrement i by 1
        i--
        // recurse
        process()
      // if current value is not 9
      }else{
        // if its a number
        if(/\d/.test(arr[i])){
          // increment by 1
          arr[i] ++
          thing = true
        // if its a letter
        }else{
          // insert number into array (don't delete any values)
          arr.splice(i+1, 0, `1`)
          thing = true
        }
      }
    }
    
    // run recursive function to check for 9s
    process()
    
    // if result has been attained, return it. Otherwise, keep looping
    if(thing == true){
      return arr.join``
    }
  }
}

incrementString=(s,a=[...s],z=0,l=a.length,r=/\d/)=>{
  if(!r.test(a[l-1]))return s+1
  for(i=--l;i>-1;--i){
    if(a[i]<9){a[i]++;return a.join``}
    if(!r.test(a[i]))return a.join``
    p=_=>{if(a[i] == 9){a[i]=`0`;i--;p()}else{if(r.test(a[i])){a[i]++;z=1}else{a.splice(++i,0,1);z=1}}};p()
    if(z)return a.join``
  }
}
