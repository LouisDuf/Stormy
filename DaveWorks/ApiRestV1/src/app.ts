import express, { Application } from 'express';
import compression from 'compression';
import cors from 'cors';
import db from './database';
import morgan from 'morgan';
import Controller from './controller/Icontroller';
import ErrorMiddleware from './middleware/error.middleware';
import bodyParser from 'body-parser';

// to secure
import helmet from 'helmet';

class App {
    public express: Application;
    public port: number;
    public dataBase: FirebaseFirestore.Firestore;

    constructor(controllers: Controller[], port: number) {
        this.express = express();
        this.port = port;
        this.dataBase = db;
        // this.initialiseDatabase();
        this.initialiseMiddleware();
        this.initialiseControllers(controllers);
        this.initialiseErrorHandling();
    }

    private initialiseMiddleware(): void {
        this.express.use(helmet());
        this.express.use(cors());
        // this.express.use(cors({
        //     origin: true,
        //     credentials: true
        //     }));
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
        // mine
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({
            extended: true
          }));

    }

    private initialiseControllers(controllers: Controller[]): void {
        controllers.forEach((controller: Controller) => {
            this.express.use('/api', controller.router);
        });
    }

    private initialiseErrorHandling(): void {
        this.express.use(ErrorMiddleware);
    }

    public listen(): void {
        this.express.listen(this.port, () => {
            console.log(`⚡️[server] : App listening on the port ${this.port}`);
        });
    }
}

export default App;