export const squareArea = (C : number) : number =>  {
  // C = 2 * PI * r  
  // rearrange formula (accounting for C being 4x greater than input, get radius of circle, then multiply by itself to find area of square
  const r = (C * 4) / (Math.PI * 2)
  const a = r**2
  
  return a
}
