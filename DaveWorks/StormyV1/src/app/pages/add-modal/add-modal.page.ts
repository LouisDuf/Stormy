import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-add-modal',
  templateUrl: './add-modal.page.html',
  styleUrls: ['./add-modal.page.scss'],
})
export class AddModalPage implements OnInit {
  tutorialShown = false;

  constructor(private modal: ModalController) { }
  choice = [{
    text: 'Inviter des amis',
    icon: 'rocket-outline'
  },
  {text: 'Créer une tache',
  icon: 'layers-sharp'  
}
];

  ngOnInit() {
  }

  close(){
    this.modal.dismiss();
  }

}
