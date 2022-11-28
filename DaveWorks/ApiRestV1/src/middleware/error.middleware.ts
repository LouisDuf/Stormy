// import { Request, Response, NextFunction } from 'express';
// import HttpException from '../config/exeptions/http.exeption';

// function errorMiddleware(
//     error: HttpException,
//     req: Request,
//     res: Response,
//     _next: NextFunction
// ): void {
//     const status = error.status || 500;
//     const message = error.message || 'Something wrong run "sa puee';
//     res.status(status).send({
//         status,
//         message,
//     });
// }

// export default errorMiddleware;