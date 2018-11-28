/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, gamePlaying;

init();



document.querySelector('.btn-roll').addEventListener('click', function() { //roll the dice
    if(gamePlaying){ // if playing the game
        let dice = Math.floor(Math.random()*6) + 1;
        let diceDom = document.querySelector('.dice')
        diceDom.style.display = 'block';
        diceDom.src = `dice-${dice}.png`;

        if (dice !== 1) { //if the dice it's equals to 1 the player loose his turn.
            roundScore += dice;
            document.querySelector(`#current-${activePlayer}`).textContent=roundScore;
        } else {
            nextPlayer();

        }
    }
});

document.querySelector('.btn-hold').addEventListener('click', function() { //save the current score to the global score
    if (gamePlaying) {
        scores [activePlayer] += roundScore;
        document.getElementById(`score-${activePlayer}`).textContent = scores[activePlayer];

        if(scores[activePlayer] >= 100) { //if the current player's score it's equals or bigger than 100 he wins the game.
            document.querySelector(`#name-${activePlayer}`).textContent = "Winner!!";
            document.querySelector(`.player-${activePlayer}-panel`).classList.add('winner');
            document.querySelector(`.player-${activePlayer}-panel`).classList.remove('active');
            document.querySelector('.dice').style.display = 'none';
            gamePlaying = false; //stop the game
        } else {
            nextPlayer();
        }
    }
});

document.querySelector('.btn-new').addEventListener('click', init);

function init () { //begins the game

    gamePlaying = true; //unlock hold and roll buttons

    scores = [0,0];
    roundScore = 0;
    activePlayer = 0;

    document.querySelector('.dice').style.display = 'none';


    document.getElementById('score-0').textContent='0';
    document.getElementById('score-1').textContent='0';
    document.getElementById('current-0').textContent='0';
    document.getElementById('current-1').textContent='0';
    document.getElementById('name-0').textContent='Player 1';
    document.getElementById('name-1').textContent='Player 2';
    document.querySelector(`.player-0-panel`).classList.remove('winner');
    document.querySelector(`.player-1-panel`).classList.remove('winner');
    document.querySelector(`.player-0-panel`).classList.remove('active');
    document.querySelector(`.player-1-panel`).classList.remove('active');
    document.querySelector(`.player-0-panel`).classList.add('active');
}

function nextPlayer () { //reset the current scores and change the current player
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    roundScore = 0; 

    document.getElementById('current-0').textContent = '0';
    document.getElementById('current-1').textContent = '0';

    document.querySelector('.player-0-panel').classList.toggle('active');
    document.querySelector('.player-1-panel').classList.toggle('active');

    document.querySelector('.dice').style.display='none';
}



