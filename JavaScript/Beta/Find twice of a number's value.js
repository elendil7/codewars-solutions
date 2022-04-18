function twiceOfANumber(addedValue, totalValue) {
  if(!addedValue && !totalValue) return null
  if((typeof(addedValue)!=`number` || typeof(totalValue)!=`number`) && (typeof(addedValue)!=`string` && typeof(totalValue)!=`string`)) return null
  return (totalValue - addedValue) / 2
}
