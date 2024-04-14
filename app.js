const express = require("express");
const port = 3000;

const path = require('path');

const app = express();

app.use(express.json());

app.use(express.static(path.join()));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/index.html"));
});

app.get("/about", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/about.html"));
});

app.get("/contact-me", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/contact-me.html"));
});

app.all("*", (req, res) => {
    res.sendFile(path.join(__dirname, "./views/404.html"));
});

app.listen(port, ()=>{
    console.log(`App listening on port ${port}!`);
});