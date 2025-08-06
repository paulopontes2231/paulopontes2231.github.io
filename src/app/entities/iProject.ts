export class Project {

    public image: string;
    public title: string;
    public description: string;
    public path: string ;
    public showButton: boolean;
   

    constructor(
        image: string,
        title: string,
        description: string,
        path: string,
        showButton: boolean
    ) {
        this.image = image;
        this.title = title;
        this.description = description;
        this.path = path;
        this.showButton = showButton;
    }
}