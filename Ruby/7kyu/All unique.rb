def unique_chars?(str)
  arr = str.split("")
  arr.length == arr.uniq.length
end
