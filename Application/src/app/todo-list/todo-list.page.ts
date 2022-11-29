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

  constructor(private modal: ModalController) {}
  
  ngOnInit() {
  }

  // Liste de mes attribut de la class TodoListPage
  isOpen : boolean = false;
  tasks : any[] = [];   //Liste de taches


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

  deleteTask(i){
    this.tasks.splice(i, 1);
  }

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
