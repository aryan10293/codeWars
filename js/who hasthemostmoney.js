function mostMoney(students) {
    // your code here
    let name = ''
    let same = 0
    let money = (students[0].fives * 5) + (students[0].tens * 10) + (students[0].twenties * 20)
    if(students.length === 1){
      return students[0].name
    } 
    students.forEach(x => {
      let total = (x.fives * 5) + (x.tens * 10) + (x.twenties * 20)
      if(total > money){
        console.log('this works')
        money = total
        name = x.name
        console.log(name)
      } else if(total === money ){
        same++
        money = total
        name = x.name
      }
    })
    if(same === students.length){
      return 'all'
    } 
    console.log(students)
    return name
  }