folding=(a,b,n)=>a==b?n||1:a>b?folding(a-b,b,!n?2:++n):folding(a,b-a,!n?2:++n)
