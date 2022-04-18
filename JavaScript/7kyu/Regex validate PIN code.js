function validatePIN (p) {
  console.log(p)
  return /^(\d{4}|\d{6})$/.test(p);
}
