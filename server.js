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
