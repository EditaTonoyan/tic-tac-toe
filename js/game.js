function resultGameStatus (){
    gameIsOver=false;

    activePlayer = 0;
    currentRound = 1;
    winnerName.innerHTML = '<span class="winner_name"> Player Name</span>!'
    overGame.style.display = 'none';
    let gameboardIndex = 0;

    for(let i = 0; i < 3; i++ ){
        for(let j = 0; j <3; j++){
            gamesData[i][j] = 0; 
            const gameBoardItemElement =  gameboard.children[gameboardIndex];
            gameboard.children[gameboardIndex].textContent = '';
            gameBoardItemElement.classList.remove('disabled');
            gameboardIndex+=1;
        }
    }
}

function startNewGame (){
    if(players[0].name === ''|| players[1].name === ''){
        alert('please set custom player names for both players');
        return;
    }
    resultGameStatus();

    activePlayerName.textContent = players[activePlayer].name;
    activeGame.style.display='block';
}


function switchPlayer () {
    if(activePlayer === 0){
        activePlayer = 1;
    }else{
        activePlayer = 0;
    }
    activePlayerName.textContent = players[activePlayer].name;
}

function toggleGameBoard (event){
    if(event.target.classList.value !== "active__game_list_items_item" || gameIsOver){
        return;
    }
   const selectedFild = event.target;
  
   
   const selectedCol = selectedFild.dataset.col - 1;
   const selectedRow = selectedFild.dataset.row - 1;
   if( gamesData[selectedRow][selectedCol] !== 0){
       alert("Plise select an empty field!");
       return;
    }
    selectedFild.textContent = players[activePlayer].simbol;
    selectedFild.classList.add('disabled');
    
    gamesData[selectedRow][selectedCol] = activePlayer + 1;

    const winnerId = checkGameOver();
    if (winnerId !== 0){
        endGame(winnerId);
    }    
    currentRound += 1
    switchPlayer();
}

    function checkGameOver (){
        //checking the rows for equality
        for (let i =0; i < 3; i++){
            if (gamesData[i][0] > 0 && 
                gamesData[i][0] === gamesData[i][1] &&
                gamesData[i][1] === gamesData[i][2] 
            )   {
            return gamesData[i][0];
            }   
        //checking the columns for equality
        for (let i =0; i < 3; i++){
            if (gamesData[0][i] > 0 && 
                gamesData[0][i] === gamesData[1][i] &&
                gamesData[0][i] === gamesData[2][i] 
        )   {
                return gamesData[0][i];
            }
        }
    }

    if(
        gamesData[0][0] > 0 && 
        gamesData[0][0] === gamesData[1][1] &&  
        gamesData[1][1] ===  gamesData[2][2]
    )   {
        return gamesData[0][0]
    }

    if(
        gamesData[2][0] > 0 && 
        gamesData[2][0] === gamesData[1][1] &&  
        gamesData[1][1] ===  gamesData[0][2]
    )   {
        return gamesData[2][0]
    }
    if(currentRound === 9){
        return -1;
    }
    return 0;
}


function endGame (winnerId) {
    gameIsOver = true;
    overGame.style.display = 'block';
    if(winnerId > 0){
        const winnerNameId = players[winnerId -1].name;
        winnerName.textContent = winnerNameId;
    }else{
        winnerName.textContent = 'It is a drow';
    }
   
}