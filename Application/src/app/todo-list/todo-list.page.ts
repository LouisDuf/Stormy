import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardAjoutComponent } from '../components/card-ajout/card-ajout.component';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.page.html',
  styleUrls: ['./todo-list.page.scss'],
})
export class TodoListPage implements OnInit {

  constructor(private modal: ModalController) {}

  ngOnInit() {
  }

  todoList = [{
    itemName: 'NomTask',
    itemDate: '29/11/2022',
    itemHourStart: '13h30',
    itemHourEnd: '15h30',
    itemLocate: 'Lieu'
  }]


  async addTaks(){
    const modal = await  this.modal.create({
      component: CardAjoutComponent,
      handle: true,
      //cssClass: "maclasse",
    });
    return await modal.present();
  }
}
