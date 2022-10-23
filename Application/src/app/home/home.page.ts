import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor() {
    //setTimeout(() => (document.querySelector('main') as HTMLElement).style.overflowY = 'scroll', 10);
  }

}
