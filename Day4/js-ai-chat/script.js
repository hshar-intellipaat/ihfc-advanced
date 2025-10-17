
const btn = document.querySelector(".btn");
async function getData(prompt){
const reponose = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer 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',
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    model: 'openai/gpt-4o',
    messages: [
      {
        role: 'user',
        content: prompt,
      },
    ],
  }),
});
const data = await reponose.json();
console.log(data.choices[0].message.content);
const answer = document.querySelector(".answer");
answer.textContent = data.choices[0].message.content;



}

btn.addEventListener("click",() => {
    var prompt = document.querySelector(".prompt").value;
    getData(prompt);
})
