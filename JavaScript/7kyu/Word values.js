wordValue=a=>a.map((v,i)=>[...v].reduce((a,b)=>a+(z=>z<0?0:z)(`ᅟabcdefghijklmnopqrstuvwxyz`.indexOf(b)),0)*++i)
