const btn = document.querySelector(".doBtn");
const carKey = document.querySelector(".carKey");
const startBtn = document.querySelector(".startBtn");
const carstatus = document.querySelector(".carstatus");

btn.addEventListener("click",function(){
    carKey.style.backgroundColor = "yellow";
});

startBtn.addEventListener("click",function(){
    carstatus.textContent = "Car has started!"
});