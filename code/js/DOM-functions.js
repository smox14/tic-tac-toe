function getBoardIndex(event){
    return Number(event.target.className.split('-').at(-1)) || NaN
}

function displayPlayerTurn(player){
    var playersTurnTag = document.querySelector('.player-turn')
    playersTurnTag.textContent = `${player.name}'s turn`
    
}

function displayScreen(currentPlayer,boxNumber){
    var boxClass = '.box-' + boxNumber
    // console.log(currentPlayer.avartar)
    temp = document.querySelector(boxClass)
    // temp.style.backgroundImage = currentPlayer.avartar
    temp.style.backgroundImage = `url('${currentPlayer.avartar}')`
    // console.log(currentPlayer.avartar)
}

function clearBoard(board){
    for(var i=0; i< board.childElementCount; i++){
        board.children[i].style.backgroundImage = ''
    }
}