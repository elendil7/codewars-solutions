function guessGifts(wishlist, presents) {  
  let result = []
  // for each gift under the tree
  for(let gift in presents){
    // against the gifts in the wishlist
    for(let item in wishlist){
      if(presents[gift].size == wishlist[item].size &&
         presents[gift].clatters == wishlist[item].clatters &&
         presents[gift].weight == wishlist[item].weight)
        { result.push(wishlist[item].name) }
    }
  }
  return [...new Set(result)]
}
