function removeUrlAnchor(url){
    // TODO: complete
    let lol = 0
    url.indexOf('#') === -1 ? lol = url.length :lol = url.indexOf('#')
    return url.slice(0,lol)
  }
  