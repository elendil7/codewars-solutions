function vaporcode(s) {
  return s.toUpperCase().split(``).filter(v=>v!=` `).join(`  `)
}
