export class Question {

    public question: string;
    public answer: string;
    public options: string[];
    public difficulty: string ;
   

    constructor(
        question: string,
        answer: string,
        options: string[],
        difficulty: string,
    ) {
        this.question = question;
        this.answer = answer;
        this.options = options;
        this.difficulty = difficulty;
    }
}