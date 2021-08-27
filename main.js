
            /**************** variable globale *****************/
//score global

let scoreP1 = document.getElementById('scorePlayer1')
let scoreP2 = document.getElementById('scorePlayer2')

//score round

let roundP1 = document.getElementById('scoreRoundP1')
let roundP2 = document.getElementById('scoreRoundP2')

//global

let globalPlayer1 = 0
let globalPlayer2 = 0

//round

let roundPlayer1 = 0
let roundPlayer2 = 0

//image

let img = document.getElementById('dice')

            /**************** variable globale *****************/

//function player  si player=1 alors player1 sinon player2 (player=2)

let player = 1
function nextPlayer(){
    player === 1 ? player ++ : player --
}

// function rool dice 

document.getElementById('btnRoll').addEventListener('click',()=>{
    let roll = calc(math.round(math.random() * (6-1)+1))
    img.src = " ./images.dice"+roll+".png"


//fin du round 

    if (roll === 1){
        player === 1 ? roundPlayer1 = 0 : roundPlayer2 = 0;
        alert ("Vous avez fait 1, vous perdez votre tour")
        nextPlayer();
    }else{
//cumul des points
        player === 1 ? roundPlayer1 += roll : roundPlayer2 += roll
    }
        player === 1 ? roundP1.innerHTML = roundPlayer1 : roundPlayer2.innerHTML = roundPlayer2
})

//function hold

    document.getElementById('btnHold').addEventListener('click',()=>{
        player === 1 ? globalPlayer1 += roundPlayer1 : globalPlayer2 += roundPlayer2
        roundPlayer1 === 0
        roundPlayer2 === 0
        player === 1 ? scoreP1.innerHTML = globalPlayer1 : scoreP2.innerHTML = globalPlayer2
        nextPlayer()
        //function win
        if(globalPlayer1 >= 100){
            alert('Joueur 1 a gagné')
        }
        if(globalPlayer2 >= 100){
            alert('Joueur 2  a gagné')
        }
    })
// function new game 

document.getElementById('btnNew').addEventListener('click',()=>{
    document.location.reload()
})
