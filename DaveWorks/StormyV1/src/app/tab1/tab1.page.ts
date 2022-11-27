import { Component, ViewChild } from '@angular/core';
import { IonModal, ModalController } from '@ionic/angular';
import { ProfilModalComponent } from '../components/profil-modal/profil-modal.component';
import { SettingsComponent } from '../components/settings/settings.component';
import { AuthentificationService } from '../services/authentification.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  
  currentDate: string;
  currentMonth: string;
  months = new Array("Janvier", "Fevrier", "Mars",
      "Avril", "May", "Juin", "Juillet", "Aout", "Septembre",
      "Octobre", "Novembre", "Decembre"); 

  //modal
  // @ViewChild(IonModal) modal: IonModal;
  // cancel() {
  //   this.modal.dismiss();
  // }
  // presentingElement = null;
    
  constructor(private authService: AuthentificationService,private modalCtrl: ModalController) {
    const date = new Date();
    var curr_date = date.getDate();
    var curr_month = date.getMonth();
     

      this.currentDate = curr_date + " " + this.months[curr_month]   

    // this.currentDate = date.toLocaleDateString('fr-FR');
    // this.presentingElement = document.querySelector('.ion-page');
  }


  async openModal() {
    const modal = await this.modalCtrl.create({
      component: SettingsComponent,
      presentingElement: document.querySelector('.ion-page'),
    });
    await modal.present();
  }
  
  

  quit(){
    this.authService.logout();
  }


}
