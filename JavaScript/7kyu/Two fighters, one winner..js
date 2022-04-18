function declareWinner(f1, f2, fa) {
  while(!0){
    if(fa === f2.name){
      // fighter 1 attacks fighter 2
      f2.health -= f1.damagePerAttack
      // fighter 2 attacks fighter 1
      f1.health -= f2.damagePerAttack

      if(f1.health <= 0) return f2.name
      if(f2.health <= 0) return f1.name 
    }else{
      // fighter 2 attacks fighter 1
      f1.health -= f2.damagePerAttack
      // fighter 1 attacks fighter 2
      f2.health -= f1.damagePerAttack

      if(f2.health <= 0) return f1.name
      if(f1.health <= 0) return f2.name 
    }
  }
}
