function remove (str) {
  return str.replace(/!/g, ``) + [...str].filter(v=>v==`!`).join``
}
