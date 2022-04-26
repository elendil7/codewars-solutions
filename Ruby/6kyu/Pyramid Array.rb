def pyramid(numbers)
  i = 0
  arr = []
  
  while i < numbers
    arr.push(Array.new(i+1).fill(1))
    i += 1
  end
  
  return arr
end
