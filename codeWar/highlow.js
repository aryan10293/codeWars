function highAndLow(numbers){
    // ... 
    return `${Math.max(...numbers.split(' ').map(x =>  Number(x)))} ${Math.min(...numbers.split(' ').map(x =>  Number(x)))}`
  }