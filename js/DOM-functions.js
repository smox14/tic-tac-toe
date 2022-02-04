function getBoardIndex(event){
    return Number(event.target.className.split('-').at(-1)) || NaN
}

function displayPlayerTurn(player){
    var playersTurnTag = document.querySelector('.player-turn')
    playersTurnTag.textContent = `${player.name}'s turn`
    
}

function displayAvatar(currentPlayer,boxNumber){
    var boxClass = '.box-' + boxNumber
    temp = document.querySelector(boxClass)
    temp.style.backgroundImage = `url('${currentPlayer.avatar}')`
}

function clearBoard(board){
    for(var i=0; i< board.childElementCount; i++){
        board.children[i].style.backgroundImage = ''
    }
}

function displayGameOver(winner){
    meowSound.play() 
    message = (winner)? `${winner} wins!` : `draw!`
    sleep(1000).then(() => {
        // set effect blur to the board
        document.querySelector('main').classList.add('blur')
        document.querySelector('.winner').textContent = message
        document.querySelector('.gameover').classList.remove('hide')
    });  
}

function removeClassList(className, classCss){
    for(var i=0; i< className.childElementCount; i++){
        className.children[i].classList.remove(classCss)
    }
}

function setDOMdisplay(){
    document.querySelector('.intro').classList.remove('hide')  
    document.querySelector('.select-cat').classList.add('hide')
    document.querySelector('.gameover').classList.add('hide')
    document.querySelector('.main-game').classList.add('hide')
    document.querySelector('.select-cat .player').textContent = currentPlayer.name
    displayPlayerTurn(currentPlayer)
}