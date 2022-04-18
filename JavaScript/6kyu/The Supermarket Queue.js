function queueTime(customers, n) {  
  // variables
  let totalTime = 0
  let slicer;
  
  // while customers remain in queue
  while(customers.length>0){
    slicer = Math.min(customers.length, n)
    
    // if one (or more) of the customers has finished shopping
    if(customers.slice(0,slicer).includes(0)){
      // update array to exclude those customers
      customers = customers.slice(0,slicer).filter(v=>v).concat(customers.slice(slicer))
      // go to next iteration of loop, with newly updated queue (to avoid adding to totalTime for empty customers)
      continue
    }
    
    // for all customers in queue (either max tills or max customers)
    for(let i = 0; i < slicer; ++i){
      // decrement the time of each customer by 1
      customers[i]--
    }
    // increment total time by 1
    totalTime++
  }
  
  // return total time required for all customers in queue to checkout
  return totalTime
}

queueTime=(c,n,t=0)=>{  
  while(c.length>0){
    s=Math.min(c.length,n)
    v=c.slice(0,s)
    if(v.includes(0))c=v.filter(v=>v).concat(c.slice(s))
    else{for(i=0;i<s;++i){c[i]--}t++}
  }
  return t
}
