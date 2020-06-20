//dependencies

const express = require("express");
const path = require("path");
const fs = require("fs");

//set up express app
const app = express();
const PORT = process.env.PORT || 3000;

//set up express app to handle data parsing and static
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(expess.json());

//make routes
//change to notes page when start button clicked
app.get("/notes", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', "index.html"));
});
app.get("/api/notes", function (req, res) {
    res.sendFile(path.join(__dirname, "/db/db.json"));
});
//default is homepage- this needs to be last in order
app.get("*", function (req, res) {
    res.sendFile(path.join(__dirname, 'public', "index.html"));
});
