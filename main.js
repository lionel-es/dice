//image
let img = document.getElementById('dice')
//score
let scoreP1 = document.getElementById('scorePlayer1');
let scoreP2 = document.getElementById('scorePlayer2');
//round score
let roundP1 = document.getElementById('scoreRound1');
let roundP2 = document.getElementById('scoreRound2');
//global score
let globalPlayer1 = 0;
let globalPlayer2 = 0;
//round player
let roundPlayer1 = 0;
let roundPlayer2 = 0;
/******************* game function *******************/
//function player if player one = 1 alors player 1 else player 2 (player = 2)
let player = 1;
function nextPlayer(){player === 1 ? player ++ : player --};
//function roll dice
document.getElementById('btnRoll').addEventListener('click',()=>{
        let roll = Math.round(Math.random() * (6-1)+1);
        img.src ="images/d"+roll+".png";
        //fin du round
        if(roll === 1){
                player === 1 ? roundPlayer1 = 0 : roundPlayer2 = 0;
                alert ('You take 1, you lost round ');
                nextPlayer();
        }else{
            //cumul des points
                player === 1 ? roundPlayer1 += roll : roundPlayer2 += roll};
                player === 1 ? roundP1.innerHTML = roundPlayer1 : roundP2.innerHTML = roundPlayer2;
});
//function hold
document.getElementById('btnHold').addEventListener('click',()=>{
        player === 1 ? globalPlayer1 += roundPlayer1 : globalPlayer2 += roundPlayer2;
        roundPlayer1 = 0;
        roundPlayer2 = 0;
        player === 1 ? scoreP1.innerHTML = globalPlayer1 : scoreP2.innerHTML = globalPlayer2
        player === 1 ? roundP1.innerHTML = roundPlayer1 : roundP2.innerHTML = roundPlayer2
        nextPlayer();
        //function win 
        if(globalPlayer1 >= 100){
                alert(' Player 1 win');
                document.location.reload()
        }
        if(globalPlayer2 >= 100){
                alert('Player 2 win');
                document.location.reload()

        }
});
document.getElementById('btnNew').addEventListener('click',()=>{
        document.location.reload();
});
