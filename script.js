
const basket = document.getElementById("basket");
let x = 47;
const move = 15;

document.addEventListener("keydown", function (event) {
  const basket_img = basket.getBoundingClientRect();
  const vw = window.innerWidth;

  if (event.key === "ArrowLeft" && basket_img.left - move >= 20) {
    x -= move;
    basket.style.left = `${basket_img.left - move}px`;
  }
  else if (event.key === "ArrowRight" && basket_img.right + move <= vw-20) {
    x += move;
    basket.style.left = `${basket_img.left + move}px`;  
  }
});