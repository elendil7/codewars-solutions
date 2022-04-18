function domainName(url){
  return url.replace(/.+\/\/|www.|\..+/g, '')
}

domainName=u=>u.replace(/.+\/\/|www.|\..+/g,``)
