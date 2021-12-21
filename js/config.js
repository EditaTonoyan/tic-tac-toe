function openPlayerConfig(event){
    editedPlayer = +event.target.dataset.playerid;
    playerConfigOverlayElemnet.style.display = 'block' ;
    backdropElemnet.style.display = 'block'
}

function closePlayerConfig(){
    playerConfigOverlayElemnet.style.display='none';
    backdropElemnet.style.display = 'none';
    formElement.firstElementChild.classList.remove('error');
    configErrors.textContent= "";
    formElement.firstElementChild.lastElementChild.value = '';
}

function savePlayerConfig (event){
    event.preventDefault();
    const formData = new FormData(event.target);
    const enteredPlayerName = formData.get('userName').trim();
    if(!enteredPlayerName){
        event.target.firstElementChild.classList.add('error');
        configErrors.textContent= "please enter a valid name";
        return;
    }

    const updatedPlayerDataElemnt = document.querySelector("#player-" + editedPlayer + "-data")
    updatedPlayerDataElemnt.children[1].textContent = enteredPlayerName;
    players[editedPlayer - 1].name = enteredPlayerName;
    closePlayerConfig();
}