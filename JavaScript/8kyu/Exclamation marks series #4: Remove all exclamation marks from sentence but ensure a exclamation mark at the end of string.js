function remove (s) {
  return s.split``.filter(v=>v!=`!`).join``.concat`!`
}
