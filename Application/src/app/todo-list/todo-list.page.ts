import { MasterTodoList } from './../models/master-todo-list';
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

  todoList : MasterTodoList = new MasterTodoList();

  constructor(private modal: ModalController, private servTaskMod : ServicetaskModelService) {}
  
  ngOnInit() {
    this.getAllTask();
  }

  // Liste de mes attribut de la class TodoListPage
  isOpen : boolean = false;


  addTaskvalue : string = '';
  editTaskvalue : string = '';

  getAllTask(){
    this.servTaskMod.getAllTask().subscribe(res => {
      this.todoList.listTasks = res; 
    }, err => {
      alert("Unable to get list of tasks");
    });
  }

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
