import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';

// import Swiper core and required modules
import SwiperCore, { FreeMode, Navigation, Thumbs } from "swiper";
import { SwiperComponent } from 'swiper/angular';
import { TestcardModule } from '../testcard/testcard.module';

// install Swiper modules
SwiperCore.use([FreeMode, Navigation, Thumbs]);

@Component({
  selector: "app-jour",
  template: ` <swiper 
 
  [spaceBetween]="50"
  [slidesPerView]="5"
  [centeredSlides] = "true"
  [navigation]="true"
  [thumbs]="{ swiper: thumbsSwiper }"
  class="mySwiper2"
  >
  
  <ng-template class="nombre" *ngFor="let item of numbers; let i = realIndex;"  swiperSlide>
   <ion-button class="Mybutton" >
   <ion-col>
   <p>{{item}}</p> <p>Jeu</p>
   </ion-col>
   </ion-button>
  </ng-template>
  
</swiper>


<swiper
  (swiper)="thumbsSwiper = $event"
  [spaceBetween]="50"
  [slidesPerView]="1"
  [centeredSlides] = "true"
  [watchSlidesProgress]="true"
  class="mySwiper"
>
    <ng-template swiperSlide>
    <div class="timelineHolder " [style.transform]="'translateY('+ hour +'px)  rotate(90deg)'" >
      <div class="timelineIndicator" #timelineIndicator ></div>
      <div class="bullet"></div>
    </div>

    <div class="hourInterval">
      <ul >
        <li>07 : 00</li>
        <li>08 : 00</li>
        <li>09 : 00</li>
        <li>10 : 00</li>
        <li>11 : 00</li>
        <li>12 : 00</li>
        <li>13 : 00</li>
        <li>14 : 00</li>
      </ul>
    </div>

    <ion-col class="cards" *ngFor="let carte of listCarte" >
     
    <div >
      <app-edtcard [card]="carte" ></app-edtcard>
      </div>  
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte"  ></app-edtcard>
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte" ></app-edtcard>
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte" ></app-edtcard>
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte" ></app-edtcard>
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte" ></app-edtcard>
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte" ></app-edtcard>
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte" ></app-edtcard>
      </ion-col>
    </ng-template>
    <ng-template swiperSlide>
      <ion-col *ngFor="let carte of listCarte" >
        <app-edtcard [card]="carte" ></app-edtcard>
      </ion-col>
    </ng-template>
  
</swiper>`,
  styleUrls: ["./jour.component.scss"],
  encapsulation: ViewEncapsulation.None,
})

export class JourComponent implements OnInit {
  thumbsSwiper: any;
  numbers = [1,2,3,4,5,6,7,8,9]

  @ViewChild('swiper', { static: false }) viewSwiper?: SwiperComponent;
  @ViewChild('timelineIndicator', { static: false }) time : ElementRef;




  










  listCarte: TestcardModule[] = [{
    categorie: "Sports",
    salle: "11OPkfc",
    nom: "levron james",
  },
  {
    categorie: "COUSCOUS",
    salle: "B19",
    nom: "rayhan",
  }, 
  {
    categorie: "Carrote",
    salle: "1A11",
    nom: "kaaris",
  }
  ] 

  // HourCal(){
  //   this.listCarte
  // }
  
 date:Date;
 hour = 0 ;
  constructor() {
   }

  ngOnInit() {
    setInterval(() => {
    this.date =  new Date();
    this.hour = this.date.getSeconds() * 6
    // this.uptdateTime(date)
    // * 30 + Math.round(this.min)
    },1000);
  }

  // uptdateTime(date){
  //   this.time.nativeElement.style.transform = 'rotate(' + date.getSeconds() * 6 +'deg)';
  //   // this.hour = this.date.getSeconds() * 6;
  // }

  
  
}
// [ngStyle]="{ transform: 'translateY(' + hour +'deg) rotate(90deg)' }"