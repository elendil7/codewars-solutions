var Calculator = {
 average: function(...args) {
   return args[0] ? args.reduce((a,b)=>a+b,0)/args.length : 0
 }
};
