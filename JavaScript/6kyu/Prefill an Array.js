function prefill(n, v) {
  if(typeof(n)===`boolean`) throw new TypeError(`${n} is invalid`)
  if(n===NaN) throw new Error(`NaN is invalid`)
  if(!isFinite(n)) throw new TypeError(`${n} is invalid`)
  if(~~n!=n) throw new TypeError(`${n} is invalid`)
  if(n<0) throw new TypeError(`${n} is invalid`)
  return Array(+n).fill(v)
}
