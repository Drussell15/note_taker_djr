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
// should recieve a new note to save request,
//add to 'db.json' file and then return new note to user

app.post("/api/notes", function (req, res) {
    //parse bd.json to get object
    let notesArray = JSON.parse(fs.readFileSync("./db/db.json", "utf8"));

    //body of request= the new notepage
    let newNote = req.body;

    //give the note an ID by doing a for loop
    for (let i = 0; i < notesArray.length; i++) {
        newNote.id = "" + [i]
    }
    //push it to the empty object
    notesArray.push(newNote);

    //write the new file to db.json, stringify it back to string to go to server
    fs.writeFileSync(".db/db.json", JSON.stringify(notesArray));
    console.log("note saved.");

    res.json(notesArray);
});
//delete note by ID//
