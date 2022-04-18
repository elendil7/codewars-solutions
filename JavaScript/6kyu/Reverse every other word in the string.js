reverse=s=>s.split` `.map((v,i)=>i%2?[...v].reverse().join``:v).join` `.trim()
