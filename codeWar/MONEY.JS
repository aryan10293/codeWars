function calculateYears(principal, interest, tax, desired) {
    // your code
      let count = 0
       if (principal === desired) return count
      for (let i = 0; principal < desired;  i++) {
            let madeThisYear = principal * interest
            let taxed = madeThisYear * tax
            let takeHome = madeThisYear - taxed
            principal += takeHome
             count++
      }
      return count
}