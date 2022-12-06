import { Component, HostListener } from '@angular/core';
import { Platform } from '@ionic/angular';
import { ScreenHandlerService } from './services/screen-handler.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
 
  constructor(private platform : Platform, 
    private screenService :ScreenHandlerService) {
      this.screenService.onResize(this.platform.width());

  }

  @HostListener('window:resize', ['$event'])
  private onResize(event) {
    this.screenService.onResize(event.target.innerWidth);
  }



}
