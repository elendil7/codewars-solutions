function DNAStrand(dna){  
  return dna.length==0?[]:dna.split``.map(v=>v==`A`?`T`:v==`T`?`A`:v==`G`?`C`:`G`).join``
}

DNAStrand=d=>d.length==0?[]:d.split``.map(v=>v==`A`?`T`:v==`T`?`A`:v==`G`?`C`:`G`).join``
