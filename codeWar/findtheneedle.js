function findNeedle(haystack) {
    // your code here
   //return haystack.includes('needle') ? `found the needle at position ${haystack.indexOf('needle')}` : undefined
   if (haystack.includes('needle')){
   return  `found the needle at position ${haystack.indexOf('needle')}`
   } else {
    return undefined
   }
  }