let MIN_RATING = 12

module.exports = {

    fullBackRating: function(player)  {
        let crossing = player.crossing * 0.08
        let dribbling = player.dribbling * 0.08
        let firstTouch = player.firstTouch * 0.05
        let passing = player.passing * 0.05
        let tackling = player.tackling * 0.03
        let technique = player.technique * 0.05
        let anticipation = player.anticipation * 0.03
        let composure = player.composure * 0.04
        let decisions = player.decisions * 0.06
        let flair = player.flair * 0.07
        let offBall = player.offBall * 0.06
        let teamWork = player.teamWork * 0.06
        let workRate = player.workRate * 0.08
        let acceleration = player.acceleration * 0.07
        let agility = player.agility * 0.03
        let balance = player.balance * 0.03
        let pace = player.pace * 0.05
        let stamina = player.stamina * 0.07
        return stamina + pace + balance + agility + acceleration + workRate + teamWork + offBall + flair + decisions 
        + composure + anticipation + technique + tackling + passing + firstTouch + dribbling + crossing;
    }, 

    centerBackRating: function(player)  {
        let heading = player.heading * 0.08
        let marking = player.marking * 0.1
        let firstTouch = player.firstTouch * 0.05
        let passing = player.passing * 0.08
        let tackling = player.tackling * 0.1
        let technique = player.technique * 0.05
        let anticipation = player.anticipation * 0.03
        let composure = player.composure * 0.07
        let decisions = player.decisions * 0.05
        let aggression = player.aggression * 0.05
        let bravery = player.bravery * 0.05
        let concentration = player.concentration * 0.04
        let positioning = player.positioning * 0.06
        let vision = player.vision * 0.03
        let jumpingReach = player.jumpingReach * 0.05
        let pace = player.pace * 0.04
        let strength = player.strength * 0.07
        return heading + pace + marking + aggression + bravery + concentration + positioning + vision + decisions + 
        composure + anticipation + technique + tackling + passing + firstTouch + jumpingReach + strength;
    }, 

    halfBackRating: function(player)  {
        let heading = player.heading * 0.04
        let marking = player.marking * 0.1
        let passing = player.passing * 0.06
        let tackling = player.tackling * 0.1
        let aggression = player.aggression * 0.05
        let anticipation = player.anticipation * 0.07
        let bravery = player.bravery * 0.04
        let composure = player.composure * 0.06
        let concentration = player.concentration * 0.08
        let decisions = player.decisions * 0.05
        let positioning = player.positioning * 0.09
        let workRate = player.workRate * 0.07
        let teamWork = player.teamWork * 0.06
        let stamina = player.stamina * 0.07
        let strength = player.strength * 0.06
        return heading + workRate + marking + aggression + bravery + concentration + positioning 
        + teamWork + decisions + composure + anticipation + stamina + tackling + passing + strength;
    }, 

    playMakerRating: function(player)  {
        let firstTouch = player.firstTouch * 0.11
        let passing = player.passing * 0.13
        let technique = player.technique * 0.11
        let anticipation = player.anticipation * 0.07
        let composure = player.composure * 0.08
        let decisions = player.decisions * 0.1
        let offBall = player.offBall * 0.05
        let workRate = player.workRate * 0.04
        let teamWork = player.teamWork * 0.1
        let vision = player.vision * 0.13
        let balance = player.balance * 0.08
        return firstTouch + passing + technique + anticipation + composure
        + decisions + offBall + workRate + teamWork + vision + balance;
    }, 

    b2bRating: function(player)  {
        let dribbling = player.dribbling * 0.04
        let finishing = player.finishing * 0.03
        let firstTouch = player.firstTouch * 0.05
        let longshots = player.longShots * 0.02
        let passing = player.passing * 0.1
        let tackling = player.tackling * 0.1
        let technique = player.technique * 0.03
        let aggression = player.aggression * 0.04
        let anticipation = player.anticipation * 0.04
        let composure = player.composure * 0.04
        let decisions = player.decisions * 0.06
        let offBall = player.offBall * 0.05
        let positioning = player.positioning * 0.04
        let workRate = player.workRate * 0.08
        let teamWork = player.teamWork * 0.08
        let acceleration = player.acceleration * 0.03
        let balance = player.balance * 0.02
        let pace = player.pace * 0.03
        let stamina = player.stamina * 0.07
        let strength = player.strength * 0.04
        return firstTouch + passing + technique + anticipation + composure + decisions + offBall + workRate + teamWork + dribbling +
         balance + finishing + longshots + tackling + aggression + positioning + acceleration + pace + stamina + strength;
    }, 

    centerMidAttackingRating: function(player)  {
        let dribbling = player.dribbling * 0.1
        let finishing = player.finishing * 0.04
        let firstTouch = player.firstTouch * 0.06
        let longshots = player.longShots * 0.02
        let passing = player.passing * 0.1
        let technique = player.technique * 0.1
        let anticipation = player.anticipation * 0.04
        let composure = player.composure * 0.04
        let decisions = player.decisions * 0.07
        let flair = player.flair * 0.06
        let offBall = player.offBall * 0.08
        let workRate = player.workRate * 0.07
        let vision = player.vision * 0.08
        let acceleration = player.acceleration * 0.05
        let balance = player.balance * 0.04
        let stamina = player.stamina * 0.05
        return firstTouch + passing + technique + anticipation + composure + decisions + offBall +
        workRate + flair + dribbling + balance + finishing + longshots + vision + acceleration + stamina;
    }, 

   insideForwardRating: function(player)  {
        let dribbling = player.dribbling * 0.0875
        let finishing = player.finishing * 0.0875
        let firstTouch = player.firstTouch * 0.0875
        let longshots = player.longShots * 0.05
        let passing = player.passing * 0.05
        let technique = player.technique * 0.0875
        let anticipation = player.anticipation * 0.05
        let composure = player.composure * 0.05
        let flair = player.flair * 0.05
        let offBall = player.offBall * 0.0875
        let acceleration = player.acceleration * 0.0875
        let agility = player.agility * 0.0875
        let balance = player.balance * 0.0875
        let pace = player.pace * 0.05
        return firstTouch + passing + technique + anticipation + composure + agility 
        + offBall + pace + flair + dribbling + balance + finishing + longshots + acceleration;
    }, 

    wingerRating: function(player)  {
        let crossing = player.crossing * 0.12
        let dribbling = player.dribbling * 0.12   
        let firstTouch = player.firstTouch * 0.06
        let passing = player.passing * 0.06
        let technique = player.technique * 0.11
        let anticipation = player.anticipation * 0.06
        let flair = player.flair * 0.07
        let offBall = player.offBall * 0.11
        let acceleration = player.acceleration * 0.12
        let agility = player.agility * 0.05
        let pace = player.pace * 0.12
        return firstTouch + passing + technique + anticipation
        + crossing + agility + offBall + pace + flair + dribbling + acceleration;
    }, 

    strikerRating: function(player)  {
        let dribbling = player.dribbling * 0.0875   
        let finishing = player.finishing * 0.0875
        let firstTouch = player.firstTouch * 0.0875
        let passing = player.passing * 0.0375
        let technique = player.technique * 0.0875
        let anticipation = player.anticipation * 0.0375
        let composure = player.composure * 0.0875
        let decisions = player.decisions * 0.0375
        let offBall = player.offBall * 0.0875
        let workRate = player.workRate * 0.0375
        let acceleration = player.acceleration * 0.0875
        let agility = player.agility * 0.0375
        let balance = player.balance * 0.0375
        let pace = player.pace * 0.0375
        let strength = player.strength * 0.0375
        return firstTouch + passing + technique + anticipation + strength + agility + offBall 
        + pace + balance + dribbling + acceleration + workRate + decisions+ composure + finishing;
    }, 

    completeStrikerRating: function(player)  {
        let dribbling = player.dribbling * 0.068   
        let finishing = player.finishing * 0.068
        let firstTouch = player.firstTouch * 0.068
        let heading = player.heading * 0.068
        let longShots = player.longShots * 0.03
        let passing = player.passing * 0.03
        let technique = player.technique * 0.068
        let anticipation = player.anticipation * 0.068
        let composure = player.composure * 0.068
        let decisions = player.decisions * 0.03
        let offBall = player.offBall * 0.068
        let teamWork = player.teamWork * 0.03
        let vision = player.vision * 0.03
        let workRate = player.workRate * 0.03
        let acceleration = player.acceleration * 0.068
        let agility = player.agility * 0.068
        let balance = player.balance * 0.03
        let jumpingReach = player.jumpingReach * 0.03
        let pace = player.pace * 0.03
        let stamina = player.stamina * 0.03
        let strength = player.strength * 0.068
        return firstTouch + passing + technique + anticipation + finishing + agility + offBall + pace + heading + dribbling 
        + acceleration + longShots + composure + decisions + teamWork + vision + workRate + balance + jumpingReach + stamina+ strength;
    }, 


    playerRating(player) {
        var MIN_RATING = 6
        let ratings = []
        if (this.fullBackRating(player) >= MIN_RATING) {
            ratings.push({ position: "WB", rating: this.fullBackRating(player).toFixed(3) })
        }
        if (this.centerBackRating(player) >= MIN_RATING) {
            ratings.push({ position: "CB", rating: this.centerBackRating(player).toFixed(3) })
        }
        if (this.halfBackRating(player) >= MIN_RATING) {
            ratings.push({ position: "HB", rating: this.halfBackRating(player).toFixed(3) })
        }
        if (this.playMakerRating(player) >= MIN_RATING) {
            ratings.push({ position: "PM", rating: this.playMakerRating(player).toFixed(3) })
        }
        if (this.b2bRating(player) >= MIN_RATING) {
            ratings.push({ position: "B2B", rating: this.b2bRating(player).toFixed(3) })
        }
        if (this.centerMidAttackingRating(player) >= MIN_RATING) {
            ratings.push({ position: "AM", rating: this.centerMidAttackingRating(player).toFixed(3) })
        }
        if (this.insideForwardRating(player)) {
            ratings.push({ position: "IF", rating: this.insideForwardRating(player).toFixed(3) })
        }
        if (this.wingerRating(player) >= MIN_RATING) {
            ratings.push({ position: "WG", rating: this.wingerRating(player).toFixed(3) })
        }
        if (this.strikerRating(player) >= MIN_RATING) {
            ratings.push({ position: "ST", rating: this.strikerRating(player).toFixed(3) })
        }
        if (this.completeStrikerRating(player) >= MIN_RATING) {
            ratings.push({ position: "CF", rating: this.completeStrikerRating(player).toFixed(3) })
        }

        return ratings
    },
};