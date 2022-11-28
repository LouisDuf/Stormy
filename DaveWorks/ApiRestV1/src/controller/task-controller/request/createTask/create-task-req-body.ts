export type CreateTaskReqBody = {
    nom : string;
    description : string;
    logo : string;
    duration : number;
    done : boolean;
    // tags : Set<string>;
    repepat : boolean;
}