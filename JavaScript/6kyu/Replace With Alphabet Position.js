function alphabetPosition(t) {
  const a = "abcdefghijklmnopqrstuvwxyz".split("")
  return t.replace(/\s+/g, '').split("").map(v => /[a-z]/i.test(v) === true ? a.indexOf(v.toLowerCase())+1 : "").filter(v => v).join(" ");
}

function alphabetPosition(t) {
  return t.split("").map(v => /[a-z]/i.test(v) === true ? "abcdefghijklmnopqrstuvwxyz".split("").indexOf(v.toLowerCase())+1 : "").filter(v => v).join(" ");
}

const alphabetPosition=(t)=>{return t.split("").map(t=>!0===/[a-z]/i.test(t)?"abcdefghijklmnopqrstuvwxyz".split("").indexOf(t.toLowerCase())+1:"").filter(t=>t).join(" ")}
