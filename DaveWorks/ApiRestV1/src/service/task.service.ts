import { TaskEntity } from '../models/taskModel';
import db from '../database';
import {firestore} from "firebase-admin";
import Timestamp = firestore.Timestamp;
import FieldValue = firestore.FieldValue;
import { serializeFS } from '../config/serializer';

class TaskService {
    //1) should make this method in task model (taskEntity)
    private task = TaskEntity;

    /**
     * Create a new post
     */
    public async createTaskById(taskOwnerUid :string,nom : string, description : string, logo : string, duration : number, done : boolean, /*tags : Set<string>,*/ repepat : boolean): Promise<TaskEntity> {
        try {
            // 2) to do this
            // const post = await this.task.createTask({ title, body });
                const taskCollection = db.collection('task');
                
                const nextId = (await taskCollection.get()).size + 1 + '';
                const ref = taskCollection.doc(nextId);

                const data = new TaskEntity(taskOwnerUid,nextId,nom,description,logo,duration,done,/*tags,*/repepat, Timestamp.now());
                //await ref.set(serializeFS(data));
                await ref.set(data);
                return data;
                // 3) 
                // return post;
            } catch (error) {                
            throw new Error('Unable to create task');
        }
    }

    async getTaskById(taskId:string) : Promise<TaskEntity|null> {
        try {
        const taskRes = await db.collection('task').doc(taskId).get();
        if(!taskRes.exists){
            console.log("the task is not found with id :");
            return null;
        }
        return Object.assign(TaskEntity.empty(), taskRes.data()!);
        } catch (error) {
            throw new Error('Unable to find task');
        }
    }

    async getTasks() : Promise<TaskEntity[]> {
        try {
            const snapshot = await db.collection('task').get();
            return snapshot.docs.map((doc) => Object.assign(TaskEntity.empty(), doc.data()));
        } catch (error) {
            throw new Error('Unable to get all task');
        }
        
    }

    public async UpdateTask(taskId:string, taskOwnerUid :string,nom : string, description : string, logo : string, duration : number, done : boolean, /*tags : Set<string>,*/ repepat : boolean): Promise<TaskEntity> {
        try{
            const taskCollection = db.collection('task');
            const ref = taskCollection.doc(taskId);
            const data = new TaskEntity(taskOwnerUid,taskId,nom,description,logo,duration,done,/*tags,*/repepat, Timestamp.now());
            await ref.update(data);
        } catch (error) {
        throw new Error('Unable to update task');
    }
    }

    public async DeleteTask(taskId:string) {
        try {
            await db.collection('task').doc(taskId).delete();
            //should return something
            // return res.status(200).send({ status: "Success", msg: "Data Removed" });
        } catch (error) {
            console.log(error);
            throw new Error('Unable to delete task');
        }
    }


}

// const addTask = async(req : Request, res : Response) => {
//     try {
//         const data = req.body;
//         await db.collection('task2').add(data);
//         // await db.collection('task2').doc().set(data);
//         res.send('Success add');
//     } catch (error) {
//         res.status(400).send('Cannot add student');
//     }
// }

export default TaskService;