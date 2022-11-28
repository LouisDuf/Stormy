import {CreateTaskReqBody} from "./create-task-req-body";
import HttpException from "../../../../config/exeptions/http.exeption";

export function checkIfIsValidCreateTaskReqBody(body:CreateTaskReqBody) {
    if(!body?.nom.length)
        throw new HttpException(400, 'BAD_REQUEST');


}