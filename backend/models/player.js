class Player {

   name;
   club;
   position ;
   age;
   price;
   scouting ;
  //Tecnicos
   corners;
   crossing;
   dribbling;
   finishing;
   firstTouch;
   freeKick;
   heading;
   longShots;
   longThrows;
   marking;
   passing;
   penaltyTaking;
   tackling;
   technique;
  //Mentais
   aggression;
   anticipation;
   bravery;
   composure;
   concentration;
   decisions;
   determination;
   flair;
   leadership;
   offBall;
   positioning;
   teamWork;
   vision;
   workRate;
  //Fisicos
   acceleration;
   agility;
   balance;
   jumpingReach;
   naturalFitness;
   pace;
   stamina;
   strength;
  //Ratings
   ratings;
   totalAttributes;
   bestRating

  constructor(
      name,
      club,
      position,
      age,
      price,
      scouting,
      corners,
      crossing,
      dribbling,
      finishing,
      firstTouch,
      freeKick,
      heading,
      longShots,
      longThrows,
      marking,
      passing,
      penaltyTaking,
      tackling,
      technique,
      aggression,
      anticipation,
      bravery,
      composure,
      concentration,
      decisions,
      determination,
      flair,
      leadership,
      offBall,
      positioning,
      teamWork,
      vision,
      workRate,
      acceleration,
      agility,
      balance,
      jumpingReach,
      naturalFitness,
      pace,
      stamina,
      strength
  ) {
      this.name = name;
      this.club = club;
      this.position = position;
      this.age = age;
      this.price = price;
      this.scouting = scouting;
      this.corners = corners;
      this.crossing = crossing;
      this.dribbling = dribbling;
      this.finishing = finishing;
      this.firstTouch = firstTouch;
      this.freeKick = freeKick;
      this.heading = heading;
      this.longShots = longShots;
      this.longThrows = longThrows;
      this.marking = marking;
      this.passing = passing;
      this.penaltyTaking = penaltyTaking;
      this.tackling = tackling;
      this.technique = technique;
      this.aggression = aggression;
      this.anticipation = anticipation;
      this.bravery = bravery;
      this.composure = composure;
      this.concentration = concentration;
      this.decisions = decisions;
      this.determination = determination;
      this.flair = flair;
      this.leadership = leadership;
      this.offBall = offBall;
      this.positioning = positioning;
      this.teamWork = teamWork;
      this.vision = vision;
      this.workRate = workRate;
      this.acceleration = acceleration;
      this.agility = agility;
      this.balance = balance;
      this.jumpingReach = jumpingReach;
      this.naturalFitness = naturalFitness;
      this.pace = pace;
      this.stamina = stamina;
      this.strength = strength;
  }
}

module.exports = Player;