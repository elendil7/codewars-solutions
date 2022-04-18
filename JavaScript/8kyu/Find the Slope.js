function slope(points){  
  return (x=>x==x/0||x==`NaN`?`undefined`:x) (``+((points[3] - points[1]) / (points[2] - points[0])))
}
