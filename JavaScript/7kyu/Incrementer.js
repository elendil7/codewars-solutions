function incrementer(nums) { 
  return nums.map((v,i)=>(x=>(``+x).length>1?+(``+x)[1]:x)(v+i+1))
}
