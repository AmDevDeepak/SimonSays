
let gameSeq = [];
let userSeq = [];

let btns = ["yellow", "red", "purple", "green"];

let isStarted = false;
let level = 0;


let h2 = document.querySelector('h2');
let h1 = document.querySelector('h1');
let p = document.querySelector('p');


let userName = prompt("Enter your name");
h1.innerText = `Hey, ${userName} Welcome To Simon Says Game`;

/* Step 1 */
document.addEventListener('keypress', function(){
    if(isStarted == false){
        console.log("Game Started!");
        isStarted = true;
        levelUp();
    } 
});

document.addEventListener('touchstart', function(){
    if(isStarted == false){
        console.log("Game Started!");
        isStarted = true;
        levelUp();
    } 
});


function gameFlash(btn){
    btn.classList.add('gameflash');
    setTimeout(function() {
        btn.classList.remove('gameflash');
    }, 250);
}

function userFlash(btn){
    btn.classList.add('userflash');
    setTimeout(function() {
        btn.classList.remove('userflash');
    }, 250);
}
/* Step 2 */
function levelUp(){
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;
    
    // Random button choose
    let randomIdx = Math.floor(Math.random() * 3);
    let randomColor = btns[randomIdx];
    let randomBtn = document.querySelector(`.${randomColor}`);
/*
    console.log(randomIdx);
    console.log(randomColor);
    console.log(randomBtn);
*/
    gameSeq.push(randomColor);
    console.log(gameSeq);
    gameFlash(randomBtn);
};

function matchBtn (idx){
    if(userSeq[idx] == gameSeq[idx]){
        if(userSeq.length == gameSeq.length){
            setTimeout(levelUp, 1000);
        }    
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level}</b>.<br> Press any key to start.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function() {
            document.querySelector('body').style.backgroundColor = "white";
        },1000);
        reset();
    }
}

function btnPress() {
    let btn = this;
    userFlash(btn);

    userColor = btn.getAttribute('id');
    userSeq.push(userColor);

    matchBtn(userSeq.length-1);
};

let allbtns = document.querySelectorAll('.btn');
for(btn of allbtns){
    btn.addEventListener('click', btnPress);
};

function reset() {
    isStarted = false;
    gameSeq = [];
    userSeq = [];
    level = 0;
}
