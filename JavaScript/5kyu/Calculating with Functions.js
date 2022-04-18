function zero(x) {
  if(!x) return 0
  if(x.length == 2){
    if(x[0] == `+`){
      return 0 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 0 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 0 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(0 / parseInt(x[1]))
    }
  }
}
function one(x) {
  if(!x) return 1
  if(x.length == 2){
    if(x[0] == `+`){
      return 1 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 1 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 1 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(1 / parseInt(x[1]))
    }
  }
}
function two(x) {
  if(!x) return 2
  if(x.length == 2){
    if(x[0] == `+`){
      return 2 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 2 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 2 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(2 / parseInt(x[1]))
    }
  }
}
function three(x) {
  if(!x) return 3
  if(x.length == 2){
    if(x[0] == `+`){
      return 3 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 3 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 3 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(3 / parseInt(x[1]))
    }
  }
}
function four(x) {
  if(!x) return 4
  if(x.length == 2){
    if(x[0] == `+`){
      return 4 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 4 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 4 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(4 / parseInt(x[1]))
    }
  }
}
function five(x) {
  if(!x) return 5
  if(x.length == 2){
    if(x[0] == `+`){
      return 5 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 5 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 5 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(5 / parseInt(x[1]))
    }
  }
}
function six(x) {
  if(!x) return 6
  if(x.length == 2){
    if(x[0] == `+`){
      return 6 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 6 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 6 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(6 / parseInt(x[1]))
    }
  }
}
function seven(x) {
  if(!x) return 7
  if(x.length == 2){
    if(x[0] == `+`){
      return 7 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 7 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 7 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(7 / parseInt(x[1]))
    }
  }
}
function eight(x) {
  if(!x) return 8
  if(x.length == 2){
    if(x[0] == `+`){
      return 8 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 8 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 8 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(8 / parseInt(x[1]))
    }
  }
}
function nine(x) {
  if(!x) return 9
  if(x.length == 2){
    if(x[0] == `+`){
      return 9 + parseInt(x[1])
    }else if(x[0] == `-`){
      return 9 - parseInt(x[1])
    }else if(x[0] == `*`){
      return 9 * parseInt(x[1])
    }else if(x[0] == `/`){
      return Math.floor(9 / parseInt(x[1]))
    }
  }
}

function plus(x) {
  return [`+`, x]
}
function minus(x) {
  return [`-`, x]
}
function times(x) {
  return [`*`, x]
}
function dividedBy(x) {
  return [`/`, x]
}
