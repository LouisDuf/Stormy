import { Set } from "typescript";
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;
import FieldValue = firestore.FieldValue;
import db from "database";  

export class TaskEntity{
    nom : string;
    id : string;
    description : string;
    logo : string;
    duration : number;
    done : boolean;
    // tags : Set<string>;
    repepat : boolean;
    createdAt : Timestamp;
    taskOwnerUid: string;

    constructor(taskOwnerUid: string, id : string, nom : string, description : string, logo : string, duration : number, done : boolean, /*tags : Set<string>,*/ repeat : boolean, createdAt : Timestamp) {
        this.taskOwnerUid = taskOwnerUid;
        this.id = id;
        this.nom = nom;
        this.description = description;
        this.logo = logo;
        this.duration = duration;
        this.done = done;
        // this.tags = tags;
        this.repepat = repeat;
        this.createdAt = Timestamp.now();
    }
    
    static empty() {
        return new TaskEntity('','','','','',0,false,/*new Set<string>(),*/false, Timestamp.now());
    }

    // async createTask(nom : string, description : string, logo : string, duration : number, done : boolean, tags : Set<string>, repepat : boolean,) {
    //     const productsCollection = db.collection('task');
    //     const nextId = (await productsCollection.get()).size + 1 + '';
    //     const ref = productsCollection.doc(nextId);
    //     const data = new TaskEntity(nom,description,logo,duration,done,tags,repepat, Timestamp.now());
    //     // await ref.set(serializeFS(data));
    //     await ref.set(data);
    //     return data;
    // }
}


// async getTasks() : Promise<ProductEntity[]> {
//     const snapshot = await db.collection('tasks').get();
//     return snapshot.docs.map((doc) => Object.assign(ProductEntity.empty(), doc.data()));
// }
