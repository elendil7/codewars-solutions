function head(val){
  return val[0]
}

function tail(val){
  return val.slice(1)
}

function init(val){
  return val.slice(0, -1)
}

function last(val){
  return +val.slice(-1)
}
