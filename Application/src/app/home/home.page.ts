import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardAjoutComponent } from '../components/card-ajout/card-ajout.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  /*constructor(private modal: ModalController) {}*/

  async add(){
    const modal = await  this.modal.create({
      component: CardAjoutComponent,
      handle: true,
      //cssClass: "maclasse",      //inutile?? aucune classe maclasse trouvé
    });
    await modal.present();
  }
  constructor(private modal: ModalController) {
    this.timeLeft$ = interval(1000).pipe(
      map(x => calcDateDiff()),
      shareReplay(1)
    );
  }
 
  public timeLeft$: Observable<timeComponents>;
}

interface timeComponents {
  minutesToDday: number;
  hoursToDday: number;
}


import { interval, Observable } from "rxjs";
import { map, shareReplay } from "rxjs/operators";


function calcDateDiff(endDay: Date = new Date(2022, 10, 31)): timeComponents {
  const dDay = endDay.valueOf();

  const milliSecondsInASecond = 1000;
  const minutesInAnHour = 60;
  const secondsInAMinute = 60;

  const timeDifference = dDay - Date.now();

  const daysToDday = Math.floor(
    timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute )
  );

  const hoursToDday = Math.floor(
    (timeDifference /
      (milliSecondsInASecond * minutesInAnHour * secondsInAMinute))
  );

  const minutesToDday = Math.floor(
    (timeDifference / (milliSecondsInASecond * minutesInAnHour)) %
      secondsInAMinute
  );

  const secondsToDday =
    Math.floor(timeDifference / milliSecondsInASecond) % secondsInAMinute;

  return { minutesToDday, hoursToDday };
}