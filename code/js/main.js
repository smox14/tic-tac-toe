var imgDir = './images/'
var avartar = ["x.png","o.png"]
var meowSound = new Audio('./sounds/meow-sound1.wav');
var gameoverSound = new Audio('./sounds/gameover.wav');

// initial setting
var boardArr = createBoard()
var isGameOver 
var count = 0
var players
var temp; // debug variable. deleted later
var currentPlayer 

var board = document.querySelector('.board')
var playBtn = document.querySelector('.btn.play')
var btns = document.querySelector('.buttons')

// start the web site
playBtn.addEventListener('click',function(){
    meowSound.play()
    sleep(1500).then(() => {
        document.querySelector('.intro').classList.toggle('hide')
        document.querySelector('.main-game').classList.remove('hide')
        startNewGame()
        clearBoard(board)
    })
})

// play game
board.addEventListener('click',function(event){    
    // check which index player clicked, will return Nan if can not get index
    var playerClickIndex = getBoardIndex(event) 
    //  check if player can click? 
    var canClick = checkCanClick(currentPlayer, playerClickIndex, boardArr)
    if(canClick){
        displayScreen(currentPlayer,playerClickIndex)

        //  check player win? 
        var isPlayerWin = checkIsWin(currentPlayer.moves)
        if(isPlayerWin) displayGameOver(currentPlayer.name)

        // check draw?
        var isDraw = checkIsDraw(boardArr)
        if(isDraw & !isPlayerWin) displayGameOver(null)
        
        // next player's turn
        count++
        currentPlayer = getPlayer(players,count)
        displayPlayerTurn(currentPlayer)
        
    }
})

// game over
btns.addEventListener('click',function(event){
    meowSound.play() 
    sleep(1500).then(() => {
        action = event.target.className.split(' ').at(-1)
        if(action === 'playagain'){
            startNewGame()
            clearBoard(board)
            document.querySelector('.gameover').classList.add('hide')
        }else if(action === 'endgame'){
            document.querySelector('.intro').classList.toggle('hide')
            document.querySelector('.main-game').classList.add('hide')
            document.querySelector('.gameover').classList.add('hide')
            startNewGame()
            clearBoard(board)
        }
    })    
})




