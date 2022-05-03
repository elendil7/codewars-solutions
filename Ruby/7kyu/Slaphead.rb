def bald(x)
  replaced = x.gsub "-", ""
  l = replaced.length
  
  [(x.gsub "/", "-"), "#{l < 1 ? "Clean" : l < 2 ? "Unicorn" : l < 3 ? "Homer" : l < 6 ? "Careless" : "Hobo"}!"]
end
