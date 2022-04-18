boomIntensity=n=>n<2?`boom`:(r=>n%5?r:r.toUpperCase())(`B${`o`.repeat(n)}m`+(n%2?``:`!`))
