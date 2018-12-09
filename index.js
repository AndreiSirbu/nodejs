
//express stuff
const express = require("express");
const bodyParser = require("body-parser");
const app = express();

const indexRouter = require('./routes/indexRoute');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.use('/', indexRouter);

app.listen(3001);
