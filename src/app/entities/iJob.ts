export class Job {

    public image: string;
    public title: string;
    public job: string;
    public technologies: string ;
    public date: string;
   

    constructor(
        image: string,
        title: string,
        job: string,
        technologies: string,
        date: string
    ) {
        this.image = image;
        this.title = title;
        this.job = job;
        this.technologies = technologies;
        this.date = date;
    }
}