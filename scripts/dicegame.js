const $playerDice1    = $('#player-dice-1');
const $playerDice2    = $('#player-dice-2');
const $playerDice1Img    = $('#player-dice-1-image');
const $playerDice2Img    = $('#player-dice-2-image');
const $playerCurrentScore    = $('#player-current-score');
const $playerTotalScore    = $('#player-total-score');

const $computerDice1    = $('#computer-dice-1');
const $computerDice2    = $('#computer-dice-2');
const $computerDice1Img    = $('#computer-dice-1-image');
const $computerDice2Img    = $('#computer-dice-2-image');
const $computerCurrentScore    = $('#computer-current-score');
const $computerTotalScore    = $('#computer-total-score');



//get the  Button elements
const $btnRollDice    = $('#roll-dice');
const $btnNewGame   = $('#new-game');

//score tracking
let playerTotalScore_value = 0;
let computerTotalScore_value = 0;
let round = 0;


//roll dice function
$btnRollDice.click(function(){
    let playerDice1_value = Math.floor(Math.random() * 6) + 1;
    let playerDice2_value = Math.floor(Math.random() * 6) + 1;
    let computerDice1_value = Math.floor(Math.random() * 6) + 1;
    let computerDice2_value = Math.floor(Math.random() * 6) + 1;
    let playerCurrentScore_value;
    let computerCurrentScore_value;

    $playerDice1Img.attr("src", `images/dice/dice-face-${playerDice1_value}.png`);
    $playerDice1Img.css("display","inline");

    $playerDice2Img.attr("src", `images/dice/dice-face-${playerDice2_value}.png`);
    $playerDice2Img.css("display","inline");

    $computerDice1Img.attr("src", `images/dice/dice-face-${computerDice1_value}.png`);
    $computerDice1Img.css("display","inline");

    $computerDice2Img.attr("src", `images/dice/dice-face-${computerDice2_value}.png`);
    $computerDice2Img.css("display","inline");

    if(playerDice1_value === 1 || playerDice2_value === 1){
        playerCurrentScore_value=0;
    }else if (playerDice1_value == playerDice2_value){
        playerCurrentScore_value = playerDice1_value *4;
    }else{
        playerCurrentScore_value = playerDice1_value + playerDice2_value;
    }
    playerTotalScore_value +=playerCurrentScore_value;

    $playerCurrentScore.html("Score this round: "+playerCurrentScore_value);
    $playerTotalScore.html("Total score: "+playerTotalScore_value);

    if(computerDice1_value === 1 || computerDice2_value === 1){
        computerCurrentScore_value=0;
    }else if (computerDice1_value == computerDice2_value){
        computerCurrentScore_value = computerDice1_value *4;
    }else{
        computerCurrentScore_value = computerDice1_value + computerDice2_value;
    }
    computerTotalScore_value +=computerCurrentScore_value;
  
    $computerCurrentScore.html("Score this round: " + computerCurrentScore_value);
    $computerTotalScore.html("Total score: "+ computerTotalScore_value);
    round += 1;
    console.log(round);

    if(round == 3){
        $(document).ready(function(){
            if(computerTotalScore_value > playerTotalScore_value){
                alert("You lose");
            }else if(computerTotalScore_value == playerTotalScore_value){
                alert("Tie");
            }else{
                alert("You win");
            }
            });
    }
});

//start new game
$btnNewGame.click(function(){
    reset();

});

function reset(){
    playerTotalScore_value = 0;
    computerTotalScore_value = 0;
    round = 0;
    $playerDice1Img.css("display","none");
    $playerDice2Img.css("display","none");
    $computerDice1Img.css("display","none");
    $computerDice2Img.css("display","none");
    $computerCurrentScore.html("Score this round: 0" );
    $computerTotalScore.html("Total score: "+ computerTotalScore_value);
    $playerCurrentScore.html("Score this round: 0");
    $playerTotalScore.html("Total score: "+playerTotalScore_value);
}