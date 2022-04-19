function unusedDigits(...args) {
  let nums = `0123456789`
  let str = ``
  
  return [...nums].map(v=>args.join``.includes(v)?``:v).join``
}
