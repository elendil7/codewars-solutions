function plant(seed, water, fert, temp){
  return (r=>r+(temp<20||temp>30?seed:``))(`-`.repeat(water) + [...Array(water)].map(v=>temp<20||temp>30?``:seed.repeat(fert)).join(`-`.repeat(water)))
}
