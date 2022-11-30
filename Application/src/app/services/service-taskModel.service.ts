import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { taskModel } from '../models/taskModel';

@Injectable({
  providedIn: 'root'
})
export class ServicetaskModelService {

  serviceURL : string;

  formData:taskModel = new taskModel();
  public list: taskModel[] = [];

  constructor(private http : HttpClient) {
    this.serviceURL = "http://localhost:8100";
    //this.resetFrom();
  }
  
  
  //crud02
  addTask(task : taskModel) : Observable<taskModel>  {
    return this.http.post<taskModel>(this.serviceURL,task);
  }

  getAllTask() : Observable<taskModel[]>  {
    return this.http.get<taskModel[]>(this.serviceURL);
  }

  deleteTask(task : taskModel) : Observable<taskModel>  {
    return this.http.delete<taskModel>(this.serviceURL+'/'+task.taskId);
  }

  editTask(task : taskModel) : Observable<taskModel>  {
    return this.http.put<taskModel>(this.serviceURL+'/'+task.taskId,task);
  }




  /*crud01
  resetFrom() {
    this.formData = new taskModel();
    this.formData.taskId = this.getRandomInt(0,999999);
  }
  
  changeStatus(id: number) {
    for(let index = 0; index < this.list.length; index++){
      if(this.list[index].taskId == id){
        this.list[index].status = (this.list[index].status == 0? 1: 0);
      }
    }
  }

  // Create
  createtaskModel(){
    this.list.push(this.formData);
  }

  // Read
  gettaskModel(id: number): any{
    let taskModel: any;
    this.list.forEach(item => {
      if(item.taskId == id)
        taskModel = item;
    });
    return taskModel;
  }

  // Update
  updatetaskModel() {
    for(let index = 0; index < this.list.length; index++){
      if(this.list[index].taskId == this.formData.taskId){
        this.list[index] = this.formData;
      }
    }
  }

  // Delete
  deletetaskModel() {
    for(let index = 0; index < this.list.length; index++){
      if(this.list[index].taskId == this.formData.taskId){
        this.list.splice(index, 1);
      }
    }
  }

  getRandomInt(min: any, max: any){
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min +1)) + min;
  }*/
}
