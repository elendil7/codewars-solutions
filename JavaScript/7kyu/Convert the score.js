function scoreboard(str) {
  let scores = {
    "nil": 0,
    "one": 1,
    "two": 2,
    "three": 3,
    "four": 4,
    "five": 5,
    "six": 6,
    "seven": 7,
    "eight": 8,
    "nine": 9
  }
  
  return (a=>[scores[a[0]], scores[a[1]]])(str.split(" ").slice(-2))
}
