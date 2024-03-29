export class Player {

    public uniqueID: string;
    public name: string;
    public age: number;
    public club: string;
    public price: string; 
    public position!: string | null;
    //Tecnicos
    public heading: number;
    public corners: number;
    public crossing: number;
    public tackling: number;
    public finishing: number;
    public dribling: number;
    public longThrows: number;
    public freeKick: number;
    public marking: number;
    public penalties: number;
    public passing: number;
    public firstTouch: number;
    public longShots: number;
    public technique: number;
    //Mentais
    public agression: number;
    public antecipation: number;
    public bravery: number;
    public composure: number;
    public concentration: number;
    public decisions: number;
    public determination: number;
    public flair: number;
    public workRate: number;
    public leadership: number;
    public positioning: number;
    public offBall: number;
    public teamWork: number;
    public vision: number;
    //Fisicos
    public acceleration: number;
    public agility: number;
    public naturalFitness: number;
    public balance: number;
    public strength: number;
    public jumpingReach: number;
    public stamina: number;
    public pace: number;
    public ratings!: string[];

    constructor(uniqueID: string, name: string, age: number, club: string, position: string ,price: string, heading: number, corners: number, 
        crossing: number, tackling: number, finishing: number, dribling: number, longThrows: number, freeKicks: number,
        marking: number, penalties: number, passing: number, firstTouch: number, longShots: number, technique: number,
        aggresion: number, antrecipation: number, bravery: number, composure: number, concentration: number, 
        decisions: number, determination: number, flair: number, workRate: number, leadership: number, positioning: number,
        offBall: number, teamWork: number, vision: number, acceleration: number, agility: number, naturalFitness: number,
        balance: number, strength: number, jumpingReach: number, stamina: number, pace: number)  {

        this.uniqueID = uniqueID;
        this.name = name;
        this.age = age;
        this.club = club;
        this.price = price;
        this.position = null;
        this.heading = heading;
        this.corners = corners;
        this.crossing = crossing;
        this.tackling = tackling;
        this.finishing = finishing;
        this.dribling = dribling;
        this.longThrows = longThrows;
        this.freeKick = freeKicks;
        this.marking = marking;
        this.penalties = penalties;
        this.passing = passing;
        this.firstTouch = firstTouch;
        this.longShots = longShots;
        this.technique = technique;
        this.agression = aggresion;
        this.antecipation = antrecipation;
        this.bravery = bravery;
        this.composure = composure;
        this.concentration = concentration;
        this.decisions = decisions;
        this.determination = determination;
        this.flair = flair;
        this.workRate = workRate;
        this.leadership = leadership;
        this.positioning = positioning;
        this.offBall = offBall;
        this.teamWork = teamWork;
        this.vision = vision;
        this.acceleration = acceleration;
        this.agility = agility;
        this.naturalFitness = naturalFitness;
        this.balance = balance;
        this.strength = strength;
        this.jumpingReach = jumpingReach;
        this.stamina = stamina;
        this.pace = pace;
    }
}