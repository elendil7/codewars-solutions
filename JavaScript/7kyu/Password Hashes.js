function passHash(str) {
  let crypto = require("crypto")
  return crypto.createHash(`md5`).update(str).digest('hex')
}
