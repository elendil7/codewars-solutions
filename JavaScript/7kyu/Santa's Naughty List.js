function findChildren(santasList, children) {
  return [...new Set(children.filter(v=>santasList.includes(v)).sort())]
}
