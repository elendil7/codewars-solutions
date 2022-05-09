def initials(name)
  arr = name.split(" ")
  i = 0
  result = ""  
  
  while i < arr.length() - 1 do
    puts arr[i]
    result = result + arr[i][0].upcase + "."
    i += 1
  end
  
  final = arr[arr.length-1]
  
  return result + final[0].upcase + final.slice(1,final.length).downcase
end
