import { taskModel } from './../../models/taskModel';
import { ServicetaskModelService } from './../../services/service-taskModel.service';
import { ModalController } from '@ionic/angular';
import { Component, Injectable, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-ajout',
  templateUrl: './card-ajout.component.html',
  styleUrls: ['./card-ajout.component.scss'],
})

@Injectable({
  providedIn:'root'
})

export class CardAjoutComponent implements OnInit {

  taskObj : taskModel = new taskModel();
  addTaskValue : string = '';
  editTaskvalue : string = '';

  constructor(private modal: ModalController, private servTaskMod: ServicetaskModelService) {}

  ngOnInit() {
    this.addTaskValue = '';
    this.editTaskvalue = '';
    this.taskObj = new taskModel();
  }

  /* Liste de mes attribut de la class CardAjoutComponent
  taskName: String;
  taskDate: Date;
  taskHourStart: String;
  taskHourEnd: String;
  taskLocate: String;

  // Attribut qui ressemble tout les attribut
  taskObject: { taskName: String; taskDate: Date; taskHourStart: String; taskHourEnd: String; taskLocate: String; };*/
  


  addTask(){
    this.taskObj.nom = this.addTaskValue;
    this.servTaskMod.addTask(this.taskObj).subscribe(res => {
      // this.ngOnInit();
      this.addTaskValue = '';
      this.editTaskvalue = '';

    }, err => {
      alert(err);
    })
  }

  // editTaks(){
  //   this.taskObj.name = this.editTaskvalue;
  //   this.servTaskMod.editTask(this.taskObj).subscribe(res => {
  //     this.ngOnInit();
  //   }, err => {
  //     alert("Failed to update task");
  //   })
  // }

  // deleteTask(edtask : taskModel) {
  //   this.servTaskMod.deleteTask(edtask).subscribe(res => {
  //     this.ngOnInit();
  //   }, err => {
  //     alert("Failed to delete task");
  //   })
  // }

  // call(etask : taskModel) {
  //   this.taskObj = etask;
  //   this.editTaskvalue = etask.name; 
  // }


  async dismis(){
    await this.modal.dismiss();
  }


  /*addNewTask(){
    var task = {
      isChecked : false,
      content : this.taskName
    }
    this.taskName = '';
    this.page.tasks.push(task);
    console.log(this.page.tasks.length)
  }

  AddTask(){
    this.taskObject = ({taskName:this.taskName,
      taskDate:this.taskDate,
      taskHourStart:this.taskHourStart,
      taskHourEnd:this.taskHourEnd,
      taskLocate:this.taskLocate})
      this.dismis()
  }*/

}
