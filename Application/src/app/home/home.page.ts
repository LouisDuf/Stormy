import { Component } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { CardAjoutComponent } from '../components/card-ajout/card-ajout.component';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  async add(){
    const modal = await  this.modal.create({
      component: CardAjoutComponent,
      handle: true,
    });
    await modal.present();
  }
  constructor(private modal: ModalController) {}

  pause() {
    tpause=!tpause;
  }
  end() {
    end=!end;
  }
}

var secondsRemaining;
var intervalHandle;
var tpause=false;
var end=false;

function tick(){
	var timeDisplay = document.getElementById("time");
	var min = Math.floor(secondsRemaining / 60);
	let sec: string|number = secondsRemaining - (min * 60) ;
	if (sec < 10) {
		sec = "0" + sec;
	}
	var message = min.toString() + ":" + sec;
	timeDisplay.innerHTML = message;
	if (secondsRemaining === 0 ){
		alert("Bien joué !");
		clearInterval(intervalHandle);
    end=false
	}
	secondsRemaining--;
  if(end==true){
    secondsRemaining=0;
  }
}

function startCountdown(){
	var minutes = 1; //val a modif en fonction de la tache
	secondsRemaining = minutes * 60;
	intervalHandle = setInterval(function(){
    if(tpause!=true){
      tick();
    }
  }, 1000);
}

window.onload = function(){
  var startButton=document.getElementById("startButton");
	startButton.onclick = function(){
		startCountdown();
	};
}