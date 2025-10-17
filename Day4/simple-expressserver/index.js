const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({origin:'*'}));

app.get("/",(req,res)=>{
    reply = "server is running on get";
    res.json({reply});
});

app.listen(3000,()=>{
    console.log("Server has Started");
});