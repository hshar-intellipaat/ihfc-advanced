
const btn = document.querySelector(".btn");

async function getData(userprompt){
const reponose = await fetch('http://127.0.0.1:3000/', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
   prompt: userprompt 
})
}
);
const data = await reponose.json();
console.log(data.reply);
const answer = document.querySelector(".answer");
answer.textContent = data.reply;
}

btn.addEventListener("click",() => {
    var prompt = document.querySelector(".prompt").value;
    getData(prompt);
})
