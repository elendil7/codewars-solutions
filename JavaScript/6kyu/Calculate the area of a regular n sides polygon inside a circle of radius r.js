function areaOfPolygonInsideCircle(circleRadius, numberOfSides) {    
  return +(0.5 * numberOfSides * circleRadius**2 * Math.sin((2*Math.PI)/numberOfSides)).toFixed(3)
  
  // find angle of one triangle
  const triangleInnerAngle = 360 / numberOfSides
  
  // get angle of half of the triangle (making an isosceles triangle)
  const angle = triangleInnerAngle / 2
  
  // get side1 and side2 of triangle (we already have side3 - the circle radius)
  const side1 = Math.sin(angle) * circleRadius
  const side2 = Math.cos(angle) * circleRadius
  
  // get full side lengths of the big triangle (the two isosceles combined back into 1)
  const fullSide1 = side1 * 2 
  const fullSide2 = side2
  
  // calculate area of 1 triangle
  const singleTriangleArea = (fullSide1 * fullSide2) / 2
  
  // calculate area of entire polygon (by multiplying area of triangle by n)
  const polygonArea = singleTriangleArea * numberOfSides
  
//   console.log(circleRadius, numberOfSides)
//   console.log("angle", angle)
  
  // return result to 3 decimal places
  return +polygonArea.toFixed(3)
}

areaOfPolygonInsideCircle=(r,n)=>+(.5*n*r**2*Math.sin(2*Math.PI/n)).toFixed(3)
