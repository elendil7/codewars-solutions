function oddOrEven(a) {
  return a.length === 0 ? "even" : a.reduce((a,b) => a+b)%2 === 0 ? "even" : "odd";
}
