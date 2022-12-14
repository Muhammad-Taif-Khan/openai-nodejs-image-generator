const express = require('express');
const dotenv = require('dotenv').config();
const path = require('path');
const app = express();
const genImage = require('./routes/openAiRouter.js');
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))


app.use(express.static(path.join(__dirname, 'public')));

app.use("/openai", genImage);
app.listen(PORT, ()=>{
    console.log(`server is live on PORT ${PORT}`)
});