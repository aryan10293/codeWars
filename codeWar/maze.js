function mazeRunner(maze, directions) {
//   // Code he
  let startNS 
  let startEW 
  let e1
  let e2
  maze.forEach((x,i) => {
  if(x.indexOf(2) > -1){
    startNS = i
    startEW = x.indexOf(2)
  }
})
  maze.forEach((x,i) => {
  if(x.indexOf(3) > -1){
    e1 = i
    e2 = x.indexOf(3)
  }
})
  
  for(let i = 0; i<directions.length; i++){
    if(directions[i] === 'N'){
      startNS--
      if(startNS<0 || maze[startNS][startEW] === 1) return 'Dead'
      if(startNS === e1 && startEW === e2) return 'Finish'
    }
    if(directions[i] === 'S'){
      startNS++
      if(startNS>maze.length-1 || maze[startNS][startEW] === 1) return 'Dead'
      if(startNS === e1 && startEW === e2) return 'Finish'
    }
    if(directions[i] === 'E'){
      startEW++
      if(startEW>maze.length-1 || maze[startNS][startEW] === 1) return 'Dead'
      if(startNS === e1 && startEW === e2) return 'Finish'
    }
    if(directions[i] === 'W'){
      startEW--
      if(startEW<0 || maze[startNS][startEW] === 1) return 'Dead'
      if(startNS === e1 && startEW === e2) return 'Finish'
    }
  }
  return 'Lost'
}
