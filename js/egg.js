var eggs = document.querySelector(".eggs");

function generateeggs() {
    var eggBottom = 470;
    var eggLeft = Math.floor(Math.random() *(window.innerWidth-100)); 

    var egg = document.createElement('div');
    egg.setAttribute("class", "egg");
    eggs.appendChild(egg);

    function fall() {
        eggBottom -= 10
        egg.style.bottom = eggBottom + 'px';
        egg.style.left = eggLeft + 'px'; }
    setInterval(fall, 30);
   
    setTimeout(generateeggs, 2000);
}
generateeggs();



function startTimer(duration, display) {
    let timer = duration;
    let countdownInterval = setInterval(function () {
        display.textContent = timer ;

        if (--timer < 0) {
            clearInterval(countdownInterval);
            display.textContent = 'Times up!';
        }
    }, 1000);
}


const initialTime = 60;
const countdownDisplay = document.getElementById('countdown');
startTimer(initialTime, countdownDisplay);