const express = require("express");
const router = express.Router();
const Player = require("../models/player");
const PlayerDomain = require("../domain/PlayerDomain")
router.get("/player", (req, res) => {
  Player.find((err, docs) => {
    if (!err) {
      res.send(docs);
    }
  });
});

router.post("/player", (req, res) => {
  let playerList = []
  let csvRecordsArray = req.body.text.split(/\r\n|\n/);
  for (let i = 0; i < csvRecordsArray.length - 1; i++) {
    let line = csvRecordsArray[i].split(";");
    let player = new Player(
      line[1].split('- ')[0],
      line[2].split('- ')[0],
      line[3],
      line[4],
      line[5],
      line[6].split('- - - ')[1],
      parseInt(line[7]),
      parseInt(line[8]),
      parseInt(line[9]),
      parseInt(line[10]),
      parseInt(line[11]),
      parseInt(line[12]),
      parseInt(line[13]),
      parseInt(line[14]),
      parseInt(line[15]),
      parseInt(line[16]),
      parseInt(line[17]),
      parseInt(line[18]),
      parseInt(line[19]),
      parseInt(line[20]),
      parseInt(line[21]),
      parseInt(line[22]),
      parseInt(line[23]),
      parseInt(line[24]),
      parseInt(line[25]),
      parseInt(line[26]),
      parseInt(line[27]),
      parseInt(line[28]),
      parseInt(line[29]),
      parseInt(line[30]),
      parseInt(line[31]),
      parseInt(line[32]),
      parseInt(line[33]),
      parseInt(line[34]),
      parseInt(line[35]),
      parseInt(line[36]),
      parseInt(line[37]),
      parseInt(line[38]),
      parseInt(line[39]),
      parseInt(line[40]),
      parseInt(line[41]),
      parseInt(line[42]),
    )
    player.ratings = PlayerDomain.playerRating(player);
    playerList.push(player)
  }
  res.send(playerList)
});

router.delete("/player/:_id", (req, res) => {
  const id = req.params._id;
  Player.findByIdAndDelete(id).then((data) => {
    if (!data) {
      res.status(404).send({ message: "Player Not Found" });
    } else {
      res.send({ message: "player deleted" });
    }
  });
});

module.exports = router;
