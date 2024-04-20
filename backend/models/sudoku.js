const mongoose = require("mongoose");

const sudokuSchema = mongoose.Schema({
  00: { type: String },
 
});

module.exports = mongoose.model("sudoku", sudokuSchema);
