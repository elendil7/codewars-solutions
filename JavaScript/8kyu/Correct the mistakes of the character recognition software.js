const correct=(s)=>s.split("").map(v=>v.replace("5", "S").replace("0", "O").replace("1", "I")).join("")

const correct=(s)=>s.replace(/5/g, "S").replace(/0/g, "O").replace(/1/g, "I")
