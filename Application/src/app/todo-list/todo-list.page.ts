import { taskModel } from './../models/taskModel';
import { ServicetaskModelService } from '../services/service-taskModel.service';
import { Component, Injectable, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardAjoutComponent } from '../components/card-ajout/card-ajout.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})

@Injectable({
  providedIn:'root'
})
export class TodoListPage implements OnInit {

  constructor(private modal: ModalController, private servTodo : ServicetaskModelService) {}
  
  ngOnInit() {
    this.addTaskvalue = '';
    this.editTaskvalue = '';
    this.taskObj = new taskModel();
    this.tasks = [];
    this.getAllTask();
  }

  // Liste de mes attribut de la class TodoListPage
  isOpen : boolean = false;
  tasks : taskModel[] = [];   //Liste de taches
  taskObj : taskModel = new taskModel();

  addTaskvalue : string = '';
  editTaskvalue : string = '';


  /*nameTask: String = '';
  Date: String = '';
  HourStart: String = '';
  HourEnd: String = '';
  Locate: String = '';*/
  
  /*todoList = [{
    itemName: 'NomTask',
    itemDate: '29/11/2022',
    itemHourStart: '13h30',
    itemHourEnd: '15h30',
    itemLocate: 'Lieu'
  }]*/

  getAllTask(){
    this.servTodo.getAllTask().subscribe(res => {
      this.tasks = res; 
    }, err => {
      alert("Unable to get list of tasks");
    });
  }

  addTask(){
    this.taskObj.name = this.addTaskvalue;
    this.servTodo.addTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
      this.addTaskvalue = '';
    }, err => {
      alert(err);
    })
  }

  editTaks(){
    this.taskObj.name = this.editTaskvalue;
    this.servTodo.editTask(this.taskObj).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to update task");
    })
  }

  deleteTask(edtask : taskModel) {
    this.servTodo.deleteTask(edtask).subscribe(res => {
      this.ngOnInit();
    }, err => {
      alert("Failed to delete task");
    })
  }

  call(etask : taskModel) {
    this.taskObj = etask;
    this.editTaskvalue = etask.name; 
  }

  ////////// OLD

  /*deleteTask(i){
    this.tasks.splice(i, 1);
  }*/

  async addTaskBox(){
    const modal = await  this.modal.create({
      component: CardAjoutComponent,
      //handle: true,
      //cssClass: "maclasse",
    });

    //modal.onDidDismiss().then(newTaskObj =>{console.log(newTaskObj.data);})

    return await modal.present();
  }
}
