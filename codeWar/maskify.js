function maskify(cc) {
    return cc.length <= 4 ? cc.slice(-4) : cc.substring(cc.length - 4, 0).split('').map(x => x='#').concat(...cc.slice(-4).split('')).join('')
  }