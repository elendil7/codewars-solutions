function movie(card, ticket, perc) {
  // * Explanation
  /*
    // * Description
    John enjoys attending the cinema on a frequent basis. He may chooses between System A and System B.
    - System A: he purchases a ticket costing $15 every time.
    - System B: he purchases a card costing $500, and the first ticket costs 90% the normal ticket price.
      Then, for each additional ticket hence, he pays 90% of the price paid for the previous ticket.
    
    // * Examples
    - If John goes to the cinema 3 times:
      System A: 15 * 3 (ticket price x total times attended cinema)
      System B: 500 + 15 * 0.90 + (15 * 0.90) * 0.90 + (15 * 0.90 * 0.90) * 0.90
      
      As you can see above, system A is relatively straightforward.
      However, in contrast, system B is much more complex, and the equation may be solved recursively.
      System A result = $45
      System B result = $536.5849999999999 (not rounded)
      
    // * Task
    John wishes to know how many times he must go to the cinema, so that the
    final result of System B, when rounded up (to the next dollar), will be cheaper than System A.
    
    You are given a movie function with 3 parameters:
    - card (price of the card)
    - ticket (normal price of a single ticket)
    - perc (fraction of what he paid for the previous ticket)
    
    And the function should result n, such as: Math.ceil(price of System B) < price of System A.
  */
  
  /* Implementation */
  // log values for debugging
  console.log(card, ticket, perc)
  
  // define variables (duplicate ticket needed to add it to sysA each time)
  let sysA = 0
  let sysB = card
  let i = 0
  
  while(Math.ceil(sysB) >= sysA){
    i++
    sysA += ticket
    sysB += ticket * Math.pow(perc, i)
    // console.log(sysA, sysB, i)
  }
  
  // return total number of times John must go to the cinema, to save money
  return i
}
