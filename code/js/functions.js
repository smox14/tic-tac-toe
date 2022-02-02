function startNewGame(){
    boardArr = createBoard()
    isGameOver = false
    count = 0
    players = []
    players.push(createPlayer('Player1',imgDir+avartar[0]))
    players.push(createPlayer('Player2',imgDir+avartar[1]))
    currentPlayer = getPlayer(players,count)
    displayPlayerTurn(currentPlayer)
}

function createPlayer(name,avartar = ''){
    return {
    name:name,
    avartar: avartar,
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

function checkCanMove(player, playerClickIndex,boardArr){
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
    
    if(isPlayerWin){
        console.log(`Congrats! ${currentPlayer.name} win:`)
        return true
    }else if(boardArr.length === 0){
        console.log('DRAW!')
        return true
    }
    return false

}



function getPlayer(playerArr,index){
    playerIndex = index % playerArr.length
    return playerArr[playerIndex]
}