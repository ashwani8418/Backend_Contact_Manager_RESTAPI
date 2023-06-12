const express = require("express");
const sendMail = require("./Controllers/sendMail.js");

const app = express();

const PORT = 5000 || process.env

app.get("/", (req, res) =>{
    res.send("Server is running ");
})

app.get("/sendEmail", sendMail);


app.get("/mail", sendMail);

const start = async() =>{
    try {
        app.listen(5000, ()=>{
            console.log(`Server is running successfully on port ${PORT}`)
        })
    } catch (error) {
        
    }
}

start();