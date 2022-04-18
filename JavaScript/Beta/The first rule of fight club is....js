stripWords=t=>t.toLowerCase().includes(`fight club`)?t.replace(/fight club/ig,`Knitting Club`):t.replace(/knitting club/ig,`Fight Club`)

stripWords=t=>t.replace(/fight club/ig,`Knitting Club`)
