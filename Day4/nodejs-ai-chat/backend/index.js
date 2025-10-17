const express = require('express');
const app = express();

app.use(express.json());

app.post("/",async(req,res)=>{
    console.log(req.body.prompt);
    try{
        const response = await fetch('https://openrouter.ai/api/v1/chat/completions', {
  method: 'POST',
  headers: {
    Authorization: 'Bearer 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',
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    model: 'tngtech/deepseek-r1t2-chimera:free',
    messages: [
      {
        role: 'user',
        content: req.body.prompt,
      },
    ],
  }),
});

const data = await response.json();
reply = data.choices[0].message.content;
res.json({reply});
    }
    catch(error){
        console.log(error);
    }
});

app.listen(3000,()=>{console.log("Server is Running!")});