var avatar = ['./images/x.png','./images/o.png']
var clickSounds = ['./sounds/bell1.wav','./sounds/bell2.wav']
var meowSound = new Audio('./sounds/meow-sound1.wav')
var gameoverSound = new Audio('./sounds/gameover.wav')
var click = new Audio('./sounds/click-sound.wav')
var meowSound2 = new Audio('./sounds/kitty-meow.wav')


// declare variable
var boardArr = createBoard()
var isGameOver = false
var temp; // debug variable. deleted later
var currentPlayer 
var count = 0
var numberOfPlayer = 2
var playerArr = []
var winner



var board = document.querySelector('.board')
var playBtn = document.querySelector('.btn.play')
var btns = document.querySelector('.buttons')
var selectAvatar = document.querySelector('.cat-imgs')

// First Meow page
playBtn.addEventListener('click',function(){
    meowSound2.play()
    sleep(1500).then(() => {
        document.querySelector('.intro').classList.toggle('hide')
        document.querySelector('.select-cat').classList.toggle('hide')
    })
})

// select cat avatar
selectAvatar.addEventListener('click',function(event){
    var selectedCat = event.target
    var imgSrc = event.target.src
    
    if(imgSrc && count < numberOfPlayer){
        click.play()
        selectedCat.classList.add('selected')
        currentPlayer.avatar = imgSrc
        count += 1
        // swap player
        currentPlayer = swapPlayer(currentPlayer)
        if(count < 2) document.querySelector('.select-cat .player').textContent = currentPlayer.name
    }if(count >=2){
        count = 0
        selectAvatar.style.pointerEvents = 'none';
        sleep(1000).then(() => {
        document.querySelector('.select-cat').classList.toggle('hide')
        document.querySelector('.main-game').classList.remove('hide')
        })
    }
})


var temp

// play game
board.addEventListener('click',function(event){    
    
    // check which index player clicked, will return Nan if can not get index
    var playerClickIndex = getBoardIndex(event) 
    
    //  check if player can click? 
    var canClick = checkCanClick(currentPlayer, playerClickIndex, boardArr)
    if(canClick){
        currentPlayer.clickSound.play()
        // display Player's Turn
        displayAvatar(currentPlayer,playerClickIndex)
        //  check player win? 
        var isPlayerWin = checkIsWin(currentPlayer.moves,boardArr)
        if(isPlayerWin){
            board.style.pointerEvents = 'none';  //disable clicked the board
            displayGameOver(currentPlayer.name)
        } 
        // check draw?
        var isDraw = checkIsDraw(boardArr)
        if(isDraw & !isPlayerWin){
            board.style.pointerEvents = 'none';
            displayGameOver(null)  
        } 
        // next player's turn
        count++
        currentPlayer = swapPlayer(currentPlayer)
        displayPlayerTurn(currentPlayer)    
    }
})

// game over
btns.addEventListener('click',function(event){
    meowSound2.play() 
    // enable click board   
    board.style.pointerEvents = 'auto';
    selectAvatar.style.pointerEvents = 'auto';

    sleep(2000).then(() => {
        action = event.target.className.split(' ').at(-1)
        if(action === 'playagain'){
            displayPlayerTurn(currentPlayer)
            setPlayerNewRound()
            clearBoard(board)
            count = 0
            document.querySelector('.gameover').classList.add('hide')
        }else if(action === 'endgame'){
            document.querySelector('.intro').classList.toggle('hide')
            document.querySelector('.main-game').classList.add('hide')
            document.querySelector('.gameover').classList.add('hide')
            removeClassList(selectAvatar,'selected')
            playerArr = []
            startNewGame()
            clearBoard(board)
            setDOMdisplay()
        }
        //remove blur effect from board
        document.querySelector('main').classList.remove('blur')
    })    
})



// start a new game 
startNewGame()
setDOMdisplay()


