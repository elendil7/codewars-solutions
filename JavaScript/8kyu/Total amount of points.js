function points(g) {
  let points = 0;
  g.map(v => v.charAt(0) > v.charAt(2) ? points+=3 : v.charAt(0) < v.charAt(2) ? points+=0 : v.charAt(0) === v.charAt(2) ? points+=1 : points+=0)
  return points;
}
