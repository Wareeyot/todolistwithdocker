const express = require("express");
const mongoose = require('mongoose');
mongoose.connect('mongodb://dritaldb:25932/test')
.then(()=>{console.log("conect")})
.catch((err)=>{console.log("non conect")})

const app =express()

app.get("/", (req, res) => {
    res.status(200).json({data:"hello world"})
})


app.listen(5000,()=>{
 console.log("Server Up and running 5000")
})