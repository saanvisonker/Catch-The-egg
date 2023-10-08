
var eggs = document.querySelector(".eggs");
var basket = document.getElementById("basket");
var x = 47;
const move = 20;
var score = 0;
var lives = 3;






//score

function updateScoreAndLives() {
    document.getElementById("score").innerHTML = "Score: " + score;

   
    
  }
  
  updateScoreAndLives();

  



  //eggs
function generateeggs() {
    var eggBottom = 500;
    var eggLeft = Math.floor(Math.random() * (window.innerWidth - 100));

    var egg = document.createElement('div');
    egg.setAttribute("class", "egg");
    eggs.appendChild(egg);

    function fall() {
        eggBottom -= 10;
        egg.style.bottom = eggBottom + 'px';
    
        var eggRect = egg.getBoundingClientRect();
        var basketRect = basket.getBoundingClientRect();
        
        if (eggRect.bottom >= basketRect.top && eggRect.left <= basketRect.right && eggRect.right >= basketRect.left) {
            score += 5;
            egg.remove();
            updateScoreAndLives();
            var finalscore =score;
            finalscore();
        }
        else if (eggBottom<0){
            egg.remove();
        }
        
    }
    egg.style.left = eggLeft + 'px';
    var eggInterval = setInterval(fall, 25);

    setTimeout(generateeggs, 1500);
}
generateeggs();
//basket

document.addEventListener("keydown", function (event) {
    const basket_img = basket.getBoundingClientRect();
    const vw = window.innerWidth;

    if (event.key === "ArrowLeft" && basket_img.left - move >= 20) {
        x -= move;
        basket.style.left = `${basket_img.left - move}px`;
    } else if (event.key === "ArrowRight" && basket_img.right + move <= vw - 20) {
        x += move;
        basket.style.left = `${basket_img.left + move}px`;
    }
});

//timer

function startTimer(duration, display) {
    let timer = duration;
    let countdownInterval = setInterval(function () {
        display.textContent = timer + ' seconds';

        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = 'Times up!';
           
        }
    }, 1000);
}


const initialTime = 60;
const countdownDisplay = document.getElementById('countdown');
startTimer(initialTime, countdownDisplay);




