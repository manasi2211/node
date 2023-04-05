const express = require('express');
const app = express();

app.get('/',(req,res) =>{
    res.send("Welcome to cc lab");
});

app.listen(3000, () => {
    console.log("Manasi Shah D12A");
});