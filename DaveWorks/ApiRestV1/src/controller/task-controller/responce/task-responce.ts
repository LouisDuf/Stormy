import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;
import FieldValue = firestore.FieldValue;
import { TaskEntity } from "../../../models/taskModel";
export class TaskResumedRes {

    nom : string;
    id : string;
    description : string;
    logo : string;
    duration : number;
    done : boolean;
    // tags : Set<string>;
    repepat : boolean;
    createdAt : Timestamp;

    constructor(data:TaskEntity) {
        this.id = data.id;
        this.nom = data.nom;
        this.description = data.description;
        this.logo = data.logo;
        this.duration = data.duration;
        this.done = data.done;
        // this.tags = data.tags;
        this.repepat = data.repepat;
        this.createdAt = data.createdAt;
    }
}