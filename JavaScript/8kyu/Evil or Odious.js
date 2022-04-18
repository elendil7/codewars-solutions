function evil(n) {
  return n.toString(2).replace(/0/g,``).length%2?`It's Odious!`:`It's Evil!`
}

evil=ᅟ=>`It's ${ᅟ.toString(2).replace(/0/g,``).length%2?`Odious`:`Evil`}!`
