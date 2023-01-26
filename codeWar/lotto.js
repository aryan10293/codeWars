function bingo(ticket, win){
    let wins = 0
    ticket.forEach(x => {
        for(let i = 0; i < x[0].split('').length; i++){
            if(x[0].charCodeAt(i) === x[1]){
                wins++
                break
            }
        }
    })
    if(wins >= win){
        return 'Winner!'
    } else {
        return 'Loser!'
    }
  }
  bingo([['ABC', 65], ['HGR', 74], ['BYHT', 74]], 2)
  bingo([['HGTYRE', 74], ['BE', 66], ['JKTY', 74]], 3)