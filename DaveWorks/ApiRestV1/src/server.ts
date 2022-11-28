// import express, { Express, NextFunction, Request, Response } from 'express';
// // import dotenv from 'dotenv';
// // import {myRouter} from './routes/taskRouter';
// import cors from 'cors';
// import CryptoJS from 'crypto-js';
// import bodyParser from 'body-parser';
// // import addTask from './controller/taskCtrl';
// import db from './database';

// dotenv.config();

// const app: Express = express();
// const port = process.env.PORT;
// const port = 8080;

// app.use(bodyParser.urlencoded({
//     extended: true
//   }));
// app.use(bodyParser.json());
// app.use(cors({
// origin: true,
// credentials: true
// }));
// app.use(express.json());

//



// app.get('/', (req: Request, res: Response) => {
//   res.send('Express + TypeScript Server');
// });

// app.use('/api', myRouter);



// app.listen(port, () => {
//   console.log(`[server]: Server is running at https://localhost:${port}`);
// });

//

// const spotifyRequest = async(req : Request, res : Response) => {
//     return new Promise((resolve, reject) => {
//         request.post(API_URL, {
//           form:{
//             code: code,
//             redi
//           },
//           headers: {
//             'Authorization': 'Basic ' + (new Buffer(CLIENT_ID + ':' + CLIENT_SECRET).toString('base64')
//           },
//           json: true
//         }, (err, resp) => err ? reject(err) : resolve(resp));
//       })
//       .then(resp => {
//         if (resp.statusCode != 200) {
//           return Promise.reject({
//             statusCode: resp.statusCode,
//             body: resp.body
//           });
//         }
//         return Promise.resolve(resp.body);
//       })
//       .catch(err => {
//         return Promise.reject({
//           statusCode: 500,
//           body: JSON.stringify({})
//         });
//       });
//   };


// const spotifyRequest = (code, ) => {
//     return new Promise((resolve, reject) => {
//         request.post(API_URL, {
//           form: {
//               code:
//              grant_type:
//              redirect_uri:
//           },
//           headers: {
//             "Authorization": "Basic " + new Buffer(CLIENT_ID + ":" + CLIENT_SECRET).toString('base64')
//           },
//           json: true
//         }, (err, resp) => err ? reject(err) : resolve(resp));
//       })
//       .then(resp => {
//         if (resp.statusCode != 200) {
//           return Promise.reject({
//             statusCode: resp.statusCode,
//             body: resp.body
//           });
//         }
//         return Promise.resolve(resp.body);
//       })
//       .catch(err => {
//         return Promise.reject({
//           statusCode: 500,
//           body: JSON.stringify({})
//         });
//       });
//   };



// import 'dotenv/config';

// import dotenv from 'dotenv';
// dotenv.config();

import validateEnv from './config/validator/validatorEnv';
import App from './app';
import TaskController from './controller/task-controller/taskCtrl';
// env dont work yet
// validateEnv();


const app = new App(
    [new TaskController()],
    Number(8080)
    // Number(process.env.PORT)

);

app.listen();
