const express = require("express");
const app = express();
const port = 3000;
var cors = require('cors');
const playersRoute = require("./routes/players");
const sudokuRoute = require("./routes/sudoku");

app.listen(port, () => {
  console.log("App is running on port " + port + "!");
});
app.use(cors());
app.use(express.urlencoded({
    extended: true
  }));
app.use(express.json());
app.use('/', playersRoute);
app.use('/', sudokuRoute);
