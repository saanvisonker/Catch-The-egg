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
    }

    egg.style.left = eggLeft + 'px'; 
    setInterval(fall, 30);
   
    setTimeout(generateeggs, 2000);
}
generateeggs();