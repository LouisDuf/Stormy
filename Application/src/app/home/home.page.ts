import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardAjoutComponent } from '../components/card-ajout/card-ajout.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private modal: ModalController) {}

  async add(){
    const modal = await  this.modal.create({
      component: CardAjoutComponent,
      handle: true,
      cssClass: "maclasse",
    });
    await modal.present();
  }

}
