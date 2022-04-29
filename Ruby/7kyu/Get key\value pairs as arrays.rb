def keysAndValues(data)
  arr = [[],[]]
  data.each {|key,val|arr[0].push(key)}
  data.each {|key,val|arr[1].push(val)}
  return arr
end
