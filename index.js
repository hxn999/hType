const express = require('express');
const path = require("path");

const app = express()
const PORT = 80

app.set("view engine","ejs");

app.use(express.static(path.join(__dirname,"public")));

app.get("/" , (req ,res) => {
    res.render("index")
})

app.listen(PORT,()=>{
    console.log(`app listening to port ${PORT}`)
})