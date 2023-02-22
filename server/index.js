const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

const fs = require('fs')
const path = require('path')

const todoRouter = require( "./routes/todo.routes")

const app = express();
const PORT = 5001

app.use(cors({ origin: "*" }));
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api/todo", todoRouter);

app.listen(5001, () => console.log('server started in port ' + PORT))