function toggleCard(cardID) {    
    toggleBlur();

    let bigCard = document.getElementById(cardID + '-big');
    bigCard.classList.toggle('hide');
}

function toggleBlur() {
    let smallCards = document.getElementsByClassName('card small');
    for (let i = 0; i < smallCards.length; i++) {
        smallCards.item(i).classList.toggle('blur');
    }
}

function clickOutsideExit() {
    let bigCards = document.getElementsByClassName('card big');
    for (let i = 0; i < bigCards.length; i++) {
        bigCards.item(i).classList.add('hide');
    }

    let smallCards = document.getElementsByClassName('card small');
    for (let i = 0; i < smallCards.length; i++) {
        smallCards.item(i).classList.remove('blur');
    }
}

window.onload = function() {
    document.onclick = function(e) {
        if (e.target.classList[0] === 'more-button') {
            toggleCard(e.target.id);
        } else if (e.target.classList[1] !== 'big') {
            clickOutsideExit();
        }
    }
}