import { Router, Request, Response, NextFunction, RequestHandler } from 'express';
import Controller from '../Icontroller';
import HttpException from '../../config/exeptions/http.exeption';
// import validationMiddleware from '../../config/validator/validationMiddleware';
// import validate from '../../models/taskModel';
import TaskService from '../../service/task.service';
import { checkIfIsValidCreateTaskReqBody } from './request/createTask/create-task-validation';
import { CreateTaskReqBody } from './request/createTask/create-task-req-body';
import db from 'database';
import { TaskEntity } from 'models/taskModel';
import { TaskResumedRes } from './responce/task-responce';

class TaskController implements Controller {
    public path = '/task';
    public router = Router();
    private Taskservice = new TaskService();

    constructor() {
        this.initialiseRoutes();
    }

    private initialiseRoutes(): void {
        //create
        this.router.post(
            `${this.path}`,
            // it will be nice 
            // validationMiddleware(validate.create),
            this.createTask
        );
        
        // get One
        this.router.get (`${this.path}` '/product/:productId', this.getProductByIdPublic);
        // get All
        this.router.get (`${this.path}`, this.getAllTAskPublic);

        //update One
        this.router.put(
            `${this.path}`,
            this.updateTask
        );
        //Delete One

        // this.router.get(

        // this.router.post(`${this.path}`, this.createProduct.bind(this), ['storeOwner']);
        
        // );
        
        // this.
        // this.router.delete(

        // )

        // this.router.get ('/product/:productId/full-details', this.getProductByIdFull.bind(this), ['storeOwner']);

    }

    private createTask = async (
        req: Request,
        res: Response,
        next: NextFunction
    ): Promise<Response | void> => {
        try {

            // const task = await this.taskService.create(body);

            // It will be nice to 
            // create a type in a file like this
            // export type CreateTaskReqBody = {
            //     // public:
            //     name:string;
            // }
            // then create an object of this type with the req.body
            // const reqBody:CreateTaskReqBody = Object.assign({}, req.body);
            // then in this methode use the object by doing this
            // const task = await this.Taskservice.createTask(
            //     req.auth!.uid,
            //     reqBody.name,
            //     reqBody.price,
            //     reqBody.stockQuantity,
            //     reqBody.internalCode,
            // );
            
            //// dont 
            /* dont work* */
            const reqBody:CreateTaskReqBody = Object.assign({}, req.body);

            checkIfIsValidCreateTaskReqBody(reqBody);
            console.log("on est laaaaaaaaaaaaaaaaaaa===========================");
            const task = await this.Taskservice.createTaskById(
                // req.auth!.uid,
                "davidTest",
                // firebase.auth().currentUser.getIdToken()
                reqBody.nom,
                reqBody.description,
                reqBody.logo,
                reqBody.duration,
                reqBody.done,
                // reqBody.tags,
                reqBody.repepat,
            );
            ////

            // work
            // const data = req.body;
            // await db.collection('task2').add(data);
            //
            res.send('Success add');
            res.status(201).json({ task });
        } catch (error) {
            next(new HttpException(400, 'Cannot create post'));
        }
    };
    private readonly getProductByIdPublic: RequestHandler = async (req, res, next,) => {
        return this.handleGetProductById(req,res, next, (data) => new ProductResumedRes(data));
    }

    private readonly getAllTAskPublic: RequestHandler = async (req, res, next) => {
        const tasks = await this.Taskservice.getTasks();
        const responseList = tasks.map(task => new TaskResumedRes(task));
        res.send(new TaskResumedRes[](responseList))
        next();
    }
    // private find = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ): Promise<Response | void> => {
    //     try {
    //         const { title, body } = req.body;

    //         const post = await this.taskService.create(title, body);
    //         res.send('Success add');
    //         res.status(201).json({ post });
    //     } catch (error) {
    //         next(new HttpException(400, 'Cannot create post'));
    //     }
    // };

    // private delete = async (
    //     req: Request,
    //     res: Response,
    //     next: NextFunction
    // ): Promise<Response | void> => {
    //     try {
    //         const { title, body } = req.body;

    //         const post = await this.taskService.create(title, body);
    //         res.send('Success add');
    //         res.status(201).json({ post });
    //     } catch (error) {
    //         next(new HttpException(400, 'Cannot create post'));
    //     }
    // };

        private updateTask = async (
            req: Request,
            res: Response,
            next: NextFunction
        ): Promise<Response | void> => {
            try {
                const reqBody:CreateTaskReqBody = Object.assign({}, req.body);
    
                checkIfIsValidCreateTaskReqBody(reqBody);
                console.log("on est laaaaaaaaaaaaaaaaaaa===========================");
                const task = await this.Taskservice.createTaskById(
                    // req.auth!.uid,
                    "davidTest",
                    // firebase.auth().currentUser.getIdToken()
                    reqBody.nom,
                    reqBody.description,
                    reqBody.logo,
                    reqBody.duration,
                    reqBody.done,
                    // reqBody.tags,
                    reqBody.repepat,
                );
                res.send('Success add');
                res.status(201).json({ task });
            } catch (error) {
                next(new HttpException(400, 'Cannot create post'));
            }
        };

}

export default TaskController;