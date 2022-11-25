import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {}

}

import { AlertController } from '@ionic/angular';

export class ExampleComponent {
  constructor(private alertController: AlertController) {}

  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Ajouter un DS',
      buttons: ['OK'],
      inputs: [
        {
          placeholder: 'Nom de la matière',
        },
        {
          //placeholder: 'Nickname (max 8 characters)',
          //attributes: {
          //  maxlength: 8,
          //},
        },
        {
          //type: 'number',
          placeholder: 'Heure',
          min: 1,
          max: 100,
        },
      ],
    });

    await alert.present();
  }
}