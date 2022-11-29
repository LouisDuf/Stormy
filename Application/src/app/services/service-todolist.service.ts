import { Injectable } from '@angular/core';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class ServiceTodolistService {

  formData:Todo = new Todo();
  public list: Todo[] = [];

  constructor() {
    this.resetFrom();
  }

  resetFrom() {
    this.formData = new Todo();
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
  createTodo(){
    this.list.push(this.formData);
  }

  // Read
  getTodo(id: number): any{
    let todo: any;
    this.list.forEach(item => {
      if(item.taskId == id)
        todo = item;
    });
    return todo;
  }

  // Update
  updateTodo() {
    for(let index = 0; index < this.list.length; index++){
      if(this.list[index].taskId == this.formData.taskId){
        this.list[index] = this.formData;
      }
    }
  }

  // Delete
  deleteTodo() {
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
  }
}
