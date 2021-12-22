let editedPlayer = 0;
let activePlayer = 0;
let currentRound = 1;
let gameIsOver = false;
const gamesData=[
    [0,0,0],
    [0,0,0],
    [0,0,0],
]
const players = [
    {
        name:'',
        simbol:'X'

    },
    {
        name:'',
        simbol:'O'
    },
]

const playerConfigOverlayElemnet = document.querySelector('.modal')
const backdropElemnet = document.querySelector('.backdrop')

const editPlayerFirstButton = document.querySelector('#edit-player-first-btn');
const editPlayerSecondButton = document.querySelector('#edit-player-second-btn');

const cancelButtonElement = document.querySelector('#cancel-button');

const formElement = document.querySelector('.modal__form')
const configErrors = document.querySelector('.config_errors');
 
const startGameButtonElement = document.querySelector("#start-game-button")
const activeGame = document.querySelector(".active__game");
// const gameboard = document.querySelectorAll(".active__game_list_items div")
const gameboard = document.querySelector(".active__game_list_items")
const activePlayerName = document.querySelector(".active_player_name");
const overGame = document.querySelector(".active__game_over");
const winnerName = document.querySelector('.winner_name');
editPlayerFirstButton.addEventListener('click', openPlayerConfig);
editPlayerSecondButton.addEventListener('click', openPlayerConfig);

cancelButtonElement.addEventListener('click', closePlayerConfig);
backdropElemnet.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
startGameButtonElement.addEventListener('click', startNewGame);

// for(let games of gameboard){
//     games.addEventListener("click", toggleGameBoard)
// }

gameboard.addEventListener("click", toggleGameBoard);