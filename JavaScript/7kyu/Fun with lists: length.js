function length(head) {
  if(head == null) return 0
  
  let length = 0
  
  function process(node){
    length ++
    if(node.next){
      return process(node.next)
    }
  }
  
  process(head)
  
  return length
}
