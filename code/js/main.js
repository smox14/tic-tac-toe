var imgDir = './images/'
var avartar = ["x.png","o.png"]

// initial setting
var boardArr = createBoard()
var isGameOver 
var count = 0
var players
var temp; // debug variable. deleted later
var currentPlayer 


var board = document.querySelector('.board')
startNewGame()
clearBoard(board)
board.addEventListener('click',function(event){    
    // check which index player clicked, will return Nan if can not get index
    var playerClickIndex = getBoardIndex(event) 
    //  check if player can click? 
    var boolPlayerCanMove = checkCanMove(currentPlayer, playerClickIndex, boardArr)
    if(boolPlayerCanMove){
        displayScreen(currentPlayer,playerClickIndex)
        
        //  check win 
        var isGameOver = checkIsWin(currentPlayer.moves,boardArr)
        
        if(isGameOver){
            console.log("game over")
            startNewGame()
            clearBoard(board)
        }else{
            // next player's turn
            count++
            currentPlayer = getPlayer(players,count)
            displayPlayerTurn(currentPlayer)
        }
    }
})

