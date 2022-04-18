const number=(a)=>{return a.length === 0 ? [] : a.map((v, i) => v === "" ? `${i+1}: ` : `${i+1}: ${v}`)}

const number=(a)=>{return a.map((v, i) => `${i+1}: ${v}`)}
