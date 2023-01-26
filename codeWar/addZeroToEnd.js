function moveZeros(arr){
    let lol = arr
    let notZeros = []
    arr.forEach(x => {if(x !== 0){ notZeros.push(x)}})
    lol.forEach(x => {if(x === 0){notZeros.push(x)}})
    return notZeros
}
let cool = ['a',0,0,'b',null, 'c', 'd', 0,1,false,0,1,0,3,[],0,1,9,0,0,{},0,0,0]
moveZeros(cool)