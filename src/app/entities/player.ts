export class Player {

    public name: string;
    public club: string;
    public position: string ;
    public age: number;
    public price: string;
    public scouting: string ;
    //Tecnicos
    public corners: number;
    public crossing: number;
    public dribbling: number;
    public finishing: number;
    public firstTouch: number;
    public freeKick: number;
    public heading: number;
    public longShots: number;
    public longThrows: number;
    public marking: number;
    public passing: number;
    public penaltyTaking: number;
    public tackling: number;
    public technique: number;
    //Mentais
    public aggression: number;
    public anticipation: number;
    public bravery: number;
    public composure: number;
    public concentration: number;
    public decisions: number;
    public determination: number;
    public flair: number;
    public leadership: number;
    public offBall: number;
    public positioning: number;
    public teamWork: number;
    public vision: number;
    public workRate: number;
    //Fisicos
    public acceleration: number;
    public agility: number;
    public balance: number;
    public jumpingReach: number;
    public naturalFitness: number;
    public pace: number;
    public stamina: number;
    public strength: number;
    //Ratings
    public ratings!: {}[];
    public totalAttributes!: number;
    public bestRating!: number

    constructor(
        name: string,
        club: string,
        position: string,
        age: number,
        price: string,
        scouting: string ,
        corners: number,
        crossing: number,
        dribbling: number,
        finishing: number,
        firstTouch: number,
        freeKick: number,
        heading: number,
        longShots: number,
        longThrows: number,
        marking: number,
        passing: number,
        penaltyTaking: number,
        tackling: number,
        technique: number,
        aggression: number,
        anticipation: number,
        bravery: number,
        composure: number,
        concentration: number,
        decisions: number,
        determination: number,
        flair: number,
        leadership: number,
        offBall: number,
        positioning: number,
        teamWork: number,
        vision: number,
        workRate: number,
        acceleration: number,
        agility: number,
        balance: number,
        jumpingReach: number,
        naturalFitness: number,
        pace: number,
        stamina: number,
        strength: number
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