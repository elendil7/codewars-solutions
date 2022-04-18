function getCount(s) {
  let i = 0;
  s.split("").map(v => (/^[aeiou]$/i).test(v) ? i++ : null).join("");
  return i;
}

function getCount(s) {
  return s.split("").filter(c => (/^[aeiou]$/i).test(c)).length
}
