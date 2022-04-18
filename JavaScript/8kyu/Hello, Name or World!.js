function hello(name) {
  return !name||name==""?"Hello, World!":`Hello, ${name.toUpperCase().slice(0,1) + name.toLowerCase().slice(1)}!`
}
