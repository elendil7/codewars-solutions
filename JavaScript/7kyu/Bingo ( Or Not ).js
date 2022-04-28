function bingo(a) {
  return (``+[...new Set(a)].map(v=>`.abcdefghijklmnopqrstuvwxyz`[v])).replace(/[^bingo]/ig,``).length === 5 ? "WIN" : "LOSE"
}
