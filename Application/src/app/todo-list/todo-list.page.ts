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

  async add(){
    const modal = await  this.modal.create({
      component: CardAjoutComponent,
      handle: true,
      //cssClass: "maclasse",
    });
    await modal.present();
  }
}
