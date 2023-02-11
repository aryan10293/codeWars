function findNeedle(haystack) {
    // your code here
   return haystack.includes('needle') ? `found the needle at position ${haystack.indexOf('needle')}` : undefined
  }