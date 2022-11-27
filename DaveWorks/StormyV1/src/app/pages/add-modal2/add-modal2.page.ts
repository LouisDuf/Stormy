import { Component, OnInit } from '@angular/core';
import { CheckboxCustomEvent } from '@ionic/angular';

@Component({
  selector: 'app-add-modal2',
  templateUrl: './add-modal2.page.html',
  styleUrls: ['./add-modal2.page.scss'],
})
export class AddModal2Page implements OnInit {

  constructor() { }

  canDismiss = false;

  presentingElement = null;

  ngOnInit() {
    this.presentingElement = document.querySelector('ion-page');
  }

  onTermsChanged(event: Event) {
    const ev = event as CheckboxCustomEvent;
    this.canDismiss = ev.detail.checked;
  }

}
