function startNewGame(){
    boardArr = createBoard()
    isGameOver = false
    count = 0
    playerArr.push(createPlayer(`CAT 1`,avatar[0],clickSounds[0]))
    playerArr.push(createPlayer(`CAT 2`,avatar[1],clickSounds[1]))
    currentPlayer = playerArr[0]
    winner = ''
}

function createPlayer(name,avatar = '',clickSound){
    return {
    name:name,
    avatar: avatar,
    moves: [],
    clickSound: new Audio(clickSound)
    }
}

function setPlayerNewRound(){
    playerArr.map(p => p.moves = [])
    count = 0 
    // currentPlayer =  currentPlayer
    boardArr = createBoard()
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

function checkCanClick(player, playerClickIndex,boardArr){
    // note: playerClickIndex = clickIndex + 1
    var clickIndex = boardArr.indexOf(playerClickIndex)
    if(clickIndex >= 0){
        player.moves.push(playerClickIndex)
        boardArr.splice(clickIndex,1)
        return true
    }
    return false
}

function checkIsWin(moves,boardArr){
    var winPatterns = getWinPattern()
    var isPlayerWinArr = winPatterns.map( eachP => eachP.every( m => moves.includes(m)))
    var isPlayerWin = isPlayerWinArr.some(bool => bool)
    if(isPlayerWin) boardArr = []
    return isPlayerWin
}

function checkIsDraw(boardArr){
    return (boardArr.length === 0)
}

function swapPlayer(player){
    return (playerArr[0].name === player.name)? playerArr[1] : playerArr[0]
}

// sleep time expects milliseconds
function sleep (time) {
    return new Promise((resolve) => setTimeout(resolve, time));
}

