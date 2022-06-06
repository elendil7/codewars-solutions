function sumTheTreeValues(root){
  // ends recursion for current tree if root is null
  if(root === null){
    return 0
  }else{
    // epic recursion, returning the total count
    return root.value + sumTheTreeValues(root.left) + sumTheTreeValues(root.right)
  }
}

sumTheTreeValues=r=>!r?0:r.value+sumTheTreeValues(r.left)+sumTheTreeValues(r.right)
