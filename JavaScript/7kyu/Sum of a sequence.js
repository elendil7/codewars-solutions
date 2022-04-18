const sequenceSum = (begin, end, step) => {
  let count = 0;
  for(let i = begin; i <= end; i+=step){
    count+=i
  }
  return count
};
