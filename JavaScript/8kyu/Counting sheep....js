function countSheeps(arr) {
  let i = 0;
  arr.forEach(v => {v===true?i++:null});
  return i;
}
