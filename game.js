// Iteration 1: Declare variables required for this game

let gameBody = document.getElementById("game-body");
const shotGunSound  = new Audio("./assets/shotgun.wav");
const backgroundSound = new Audio("./assets/bgm.mp3");
let width = 100;
gameBody.addEventListener('click', shotgunSound);

let zombieId = 1;
let lives = 4;
// Iteration 1.2: Add shotgun sound

function shotgunSound(){
    shotGunSound.pause();
    shotGunSound.currentTime = 0;
    shotGunSound.play();
}


// Iteration 1.3: Add background sound

backgroundSound.loop = true;
backgroundSound.play();

// Iteration 1.4: Add lives

// Iteration 2: Write a function to make a zombie
let zombie;
createZombie();
function createZombie(){
    let number = helperRandomInteger(1,6);
    gameBody.innerHTML += `<img src= ./assets/zombie-${number}.png alt=zombie class=zombie-image id=zombie${zombieId} />`
    zombie = document.getElementById(`zombie${zombieId}`);
    zombie.style.transform = `translateX(${helperRandomInteger(20,80)}vw)`;
    zombie.style.animationDuration = `${helperRandomInteger(2,6)}s`;
    zombie.addEventListener('click', ()=>{destroyZombie(zombie)});
}

// Iteration 3: Write a function to check if the player missed a zombie

function zombieEscape(zombie){
    if(lives == 0){
        location.href = "game-over.html";
    }
    else if(zombie.getBoundingClientRect().top<=0){
        lives--;
        width -= 25;
        document.getElementById("lives").style.width = `${width}%`;
        destroyZombie(zombie);
    }
}

// Iteration 4: Write a function to destroy a zombie when it is shot or missed

function destroyZombie(zombie){
    zombie.style.display = "none";
    zombieId++;
    createZombie();
}
// Iteration 5: Creating timer
let time = 60;
setInterval(timer,1000)
function timer(){
    let topTimer = document.getElementById("timer");
    if(time == 0){
        location.href = "win.html";
    }else{
        topTimer.innerText = time;
        time--;
        zombieEscape(zombie);
    }
}
// Iteration 6: Write a code to start the game by calling the first zombie

// Iteration 7: Write the helper function to get random integer

function helperRandomInteger(min, max){
    return Math.floor(Math.random()*max)+min;
}
