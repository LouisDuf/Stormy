import { ModalController } from '@ionic/angular';
import { Component, Injectable, OnInit } from '@angular/core';
import { TodoListPage } from '../../todo-list/todo-list.page';

@Component({
  selector: 'app-card-ajout',
  templateUrl: './card-ajout.component.html',
  styleUrls: ['./card-ajout.component.scss'],
})

@Injectable({
  providedIn:'root'
})

export class CardAjoutComponent implements OnInit {

  constructor(private modal: ModalController, private page: TodoListPage) {}

  ngOnInit() {}

  // Liste de mes attribut de la class CardAjoutComponent
  taskName: String;
  taskDate: Date;
  taskHourStart: String;
  taskHourEnd: String;
  taskLocate: String;

  // Attribut qui ressemble tout les attribut
  taskObject: { taskName: String; taskDate: Date; taskHourStart: String; taskHourEnd: String; taskLocate: String; };
  
  async dismis(){
    await this.modal.dismiss();
  }


  addNewTask(){
    var task = {
      isChecked : false,
      content : this.taskName
    }
    this.taskName = '';
    this.page.tasks.push(task);
    console.log(this.page.tasks.length)

  }

  /*AddTask(){
    this.taskObject = ({taskName:this.taskName,
      taskDate:this.taskDate,
      taskHourStart:this.taskHourStart,
      taskHourEnd:this.taskHourEnd,
      taskLocate:this.taskLocate})
      this.dismis()
  }*/

}
