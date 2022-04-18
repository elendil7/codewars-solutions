function isLockNessMonster(s) {  
  return s.includes(`tree fiddy`)||s.includes(`3.50`)
}

isLockNessMonster=s=>/tree fiddy|3.50/.test(s)
