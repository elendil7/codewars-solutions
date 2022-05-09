def swap_vowel_case(s)
  arr = s.split""
  res = []
  
  for i in arr do
    if "aeiou".include? i.downcase
      if i.upcase == i
        res.push(i.downcase)
      else
        res.push(i.upcase)
      end
    else
      res.push(i)
    end
  end
  
  return res.join""
end
