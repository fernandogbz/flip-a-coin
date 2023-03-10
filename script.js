let heads = 0;
let tails = 0;
let coin = document.querySelector(".coin");
let flipBtn = document.querySelector("#flip-button");
let resetBtn = document.querySelector("#reset-button");

//Flip the coin on button click
flipBtn.addEventListener("click", () => {
  let i = Math.floor(Math.random() * 2);
  coin.style.animation = "none";
    if(i) {
      setTimeout(function(){
        coin.style.animation = "spin-heads 3s forwards";
      }, 100);
      heads++;
    } else {
      setTimeout(function(){
        coin.style.animation = "spin-tails 3s forwards";
      }, 100);
      tails++;
    }
    setTimeout(updateStats, 3000); 
    disableButton();
});

//Update the heads and tails count
const updateStats = () => {
  document.querySelector("#heads-count").textContent = `Heads : ${heads}`;
  document.querySelector("#tails-count").textContent = `Tails : ${tails}`;
}

//Disable flip button till coin stops flipping
const disableButton = () => {
  flipBtn.disabled = true;
  setTimeout(function() {
    flipBtn.disabled = false;
  }, 3000);
}

//Reset the coin and count
resetBtn.addEventListener("click", () => {
  coin.style.animation = "none";
  heads = 0;
  tails = 0;
  updateStats();
})