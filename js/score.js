
var eggs = document.querySelector(".eggs");
var basket = document.getElementById("basket");
var x = 47;
const move = 20;
var score = 0;
var lives = 3;


function updateScoreAndLives() {
    document.getElementById("score").innerHTML = "Score: " + score;
   
    
  }
  
  updateScoreAndLives();

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
