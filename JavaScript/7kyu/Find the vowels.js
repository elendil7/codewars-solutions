vowelIndices=w=>[...w].map((v,i)=>/[aeiouy]/i.test(v)?++i:0).filter(v=>v)
