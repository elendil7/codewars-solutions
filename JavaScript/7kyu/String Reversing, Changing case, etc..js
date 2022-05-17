function reverseAndMirror(s1,s2) {
  return [[...s2].map(v=>v.toLowerCase()==v?v.toUpperCase():v.toLowerCase()).reverse().join(""), [...s1].reverse().map(v=>v.toLowerCase()==v?v.toUpperCase():v.toLowerCase()).join("") + [...s1].map(v=>v.toLowerCase()==v?v.toUpperCase():v.toLowerCase()).join("")].join("@@@")
}
