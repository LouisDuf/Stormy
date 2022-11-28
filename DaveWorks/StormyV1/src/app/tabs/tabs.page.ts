import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { AddModalPage } from '../pages/add-modal/add-modal.page';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(private modal: ModalController) {}

  async add(){
    const modal = await  this.modal.create({
      component: AddModalPage,
      breakpoints: [1],
      initialBreakpoint: 0.45,
      handle: true,

    });
    await modal.present();
  }


  
}
