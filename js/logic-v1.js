function createPlayer(name){
    return {
    name:name,
    moves: []
    }
}

function createBoard(){
    return [1,2,3,
            4,5,6,
            7,8,9]
}

function getWinPattern(){
    return  [[1,2,3],
            [4,5,6],
            [7,8,9],
            [1,4,7],
            [2,5,8],
            [3,6,9],
            [1,5,9],
            [3,5,7]]
}

function checkIsWin(moves){
    var winPatterns = getWinPattern()
    var isPlayerWinArr = winPatterns.map( eachP => eachP.every( m => moves.includes(m)))
    var isPlayerWin = isPlayerWinArr.some(bool => bool)
    return isPlayerWin
}



var players = []
players.push(createPlayer('mukkii'))
players.push(createPlayer('TK'))
var board = createBoard()
var endGame = false
var count = 0

while (!endGame) {
    var playerIndex = count % 2
    console.log(count)
    // get input from user
    move = Number(prompt(`${players[playerIndex].name} turn:  enter num 1-9 \n ${board}`))

    //  check if player can move? 
    console.log(board)
    var getCanMoveIndex = board.indexOf(move)
    console.log(getCanMoveIndex)
    if(getCanMoveIndex < 0){
        continue    
    }
    players[playerIndex].moves.push(move)
    board.splice(getCanMoveIndex,1)
    console.log("do something")

    // check if draw
    if(board.length === 0 && (!endGame)){
        console.log('DRAW!')
        console.log(players.map(p => p.moves))
        endGame = true
    }
    // check if player win 
    var isPlayerWin = checkIsWin(players[playerIndex].moves)
    if(isPlayerWin){
        console.log(`Congrats! ${players[playerIndex].name} win: ${players[playerIndex].moves}`)
        endGame = true
    }
    count++
}



