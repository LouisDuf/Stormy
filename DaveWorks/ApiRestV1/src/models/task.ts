import { Set } from "typescript";

export class Task{
    nom : string;
    description : string;
    logo : string;
    duration : number;
    done : boolean;
    tags : Set<string>;
    repepat : boolean;

    constructor(nom : string, description : string, logo : string, duration : number, done : boolean, tags : Set<string>, repeat : boolean) {
        this.nom = nom;
        this.description = description;
        this.logo = logo;
        this.duration = duration;
        this.done = done;
        this.tags = tags;
        this.repepat = repeat;
    }
} 