let editedPlayer = 0;

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
const activeGame = document.querySelector(".active__game")
editPlayerFirstButton.addEventListener('click', openPlayerConfig);
editPlayerSecondButton.addEventListener('click', openPlayerConfig);

cancelButtonElement.addEventListener('click', closePlayerConfig);
backdropElemnet.addEventListener('click', closePlayerConfig);

formElement.addEventListener('submit', savePlayerConfig);
startGameButtonElement.addEventListener('click', startNewGame);