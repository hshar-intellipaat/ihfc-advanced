const btn = document.querySelector(".weatherBtn");
const city = document.querySelector(".city .value");
const temp = document.querySelector(".temp .value");
const description = document.querySelector(".description .value");

async function getData() {
    let cityText = document.querySelector(".city").value;
    const key = "fdeb67eee4db1190d66635e48a7af3bc";
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+cityText+"&appid="+key;

    const response = await fetch(url);
    const data = await response.json();
    city.textContent = data.name;
    temp.textContent = data.main.temp;
    description.textContent = data.weather[0].description;
}

btn.addEventListener("click",function(){
getData();
});
