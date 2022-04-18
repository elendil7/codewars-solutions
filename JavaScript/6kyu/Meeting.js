function meeting(s){
  let fullnames = s.toUpperCase().split`;`

  let sorted = fullnames.sort((a,b)=>a.split`:`[1]==b.split`:`[1]?a.split(`:`)[0].localeCompare(b.split(`:`)[0]):a.split(`:`)[1].localeCompare(b.split(`:`)[1]))
  
  return sorted.map(v=>`(${v.split`:`[1]}, ${v.split`:`[0]})`).join``
}

meeting=s=>s.toUpperCase().split`;`.sort((a,b)=>a.split`:`[1]==b.split`:`[1]?a.split(`:`)[0].localeCompare(b.split(`:`)[0]):a.split(`:`)[1].localeCompare(b.split(`:`)[1])).map(v=>`(${v.split`:`[1]}, ${v.split`:`[0]})`).join``

meeting=s=>s.toUpperCase().split`;`.sort((a,b)=>a.split`:`[1]==b.split`:`[1]?a.split`:`[0].localeCompare(b.split`:`[0]):a.split`:`[1].localeCompare(b.split`:`[1])).map(v=>`(${v.split`:`[1]}, ${v.split`:`[0]})`).join``
