import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ScreenHandlerService } from '../services/screen-handler.service';

@Component({
  selector: 'app-stormyhome',
  templateUrl: './stormyhome.page.html',
  styleUrls: ['./stormyhome.page.scss'],
})
export class StormyhomePage implements OnInit {


  ngOnInit() {
  }

  isDesktop: boolean;

  constructor(private modal: ModalController, private screenService :ScreenHandlerService) {
    console.log("je me ctr");
      this.screenService.isDesktopView().subscribe(isDesktop => {
        if (this.isDesktop && !isDesktop) {
    console.log("desktop");

          // Reload because our routing is out of place
          window.location.reload();
        }
        console.log("no desk");
  
        this.isDesktop = isDesktop;
      });
  
    }

}
