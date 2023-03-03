var snakesAndLadders = function(board, dice) {
    // Your code here
    let move = 0
    if(dice.length === 0) return 0
    for(let i = 0; i< dice.length; i++){
      move += dice[i]
      if(move > board.length - 1){
        move -= dice[i]
      } else if(move === board.length){
        return board.length - 1
      } else if(move < board.length){
          move+=board[move] 
      }
      if(i === dice.length - 1){
        return move 
      }
    }
  }