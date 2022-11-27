import { AfterContentChecked, Component, ElementRef, OnInit, QueryList, ViewChild, ViewChildren, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { IonList, IonText } from '@ionic/angular';
import SwiperCore, { Pagination, SwiperOptions, Thumbs } from 'swiper';
import {SwiperComponent } from 'swiper/angular';
import { EDTcardComponent } from '../components/edtcard/edtcard.component';
import { TestcardModule } from '../components/testcard/testcard.module';

SwiperCore.use([Pagination,Thumbs]);

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  encapsulation: ViewEncapsulation.None,
})

export class Tab2Page { //   implements AfterContentChecked 
  // thumbsSwiper: any;
  // @ViewChild('swiper2') swiper2: SwiperComponent;
  // // @ViewChild('swiper1') swiper1: SwiperComponent;
  // @ViewChild('swiper1', { static: false }) swiper?: SwiperComponent;
  // // @ViewChild('swip') swip: SwiperComponent;
  
  // config: SwiperOptions = {
  //   slidesPerView: 1,
  // }
  

  // buttonSlide: SwiperOptions = { 
  //   slidesPerView: 5,
  //   freeMode: true,
  //   slidesOffsetAfter:100,
  //   slidesOffsetBefore: 30,
  //   thumbs : {  swiper: this.swiper.swiperRef  }
  // }

  numbers = [1,2,3,4,5,6,7,8,9,10,11,12]
  
  /* Il faut crée une ObservableList avec ci dessous 
    @ViewChildren('swiper1', { read: ElementRef }) lists : QueryList<ElementRef>;


  Après on utilise pour s'abboner au chagement de cette array que on aurra cast préalablment
  ngAfterViewInit(){
    this.lists.changes.subscribe( => {
      this.ListView = this.lists.toArray();
    });

  }
  */

  // selectedCategory(index){

  // }



  // async segmentChanged(event) {
  //   await this.slider.slideTo(this.segment);
  //   this.slider.update();
  // }
  // async slideChanged() {
  //   this.segment = await this.slider.getActiveIndex();
  //   this.focusSegment(this.segment+1);
  // }


 


  // async segmentChanged(event){
  //   this.swiper1.swiperRef.slideTo(this.activeCategory);
  //   //await this.selectedSlide.slideTo(this.segment); 
  //   }
   
 
  //  async slidesChanged(slides: SwiperComponent) {
  //  this.activeDay = slides;
  //  slides.getActiveIndex().then( selectedIndex =>{
  //  this.segment = selectedIndex; 
  //   });
    




  // async slidesCatChanged(event){
  //   this.swiper1.SwipeT
  //   this.slider.slideTo(this.segment);
  //   this.swiper1.updateSwiper({});
  //   //await this.selectedSlide.slideTo(this.segment); 
  //   }
   
 
  //  async slidesChanged(slides: IonSlides) {
  //  this.selectedSlide = slides;
  //  slides.getActiveIndex().then( selectedIndex =>{
  //  this.segment = selectedIndex; 
  //   });


  // verticalSlide: SwiperOptions = {
  //   initialSlide: 0,
  //   direction: 'vertical',
  //   slidesPerView: 1.5,
  // }

  // onClick(item) {
  //   console.log(item)
  //   this.swiper2 = item;
  // }


  
  constructor() {
    // console.log(this.SelectDay);
  }
  
  activeCategory = 0;
  
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
  
  // ngAfterContentChecked(): void {
  //   if(this.swiper1){
  //     this.swiper1.updateSwiper({});
  //   }
  // }


  // slideToThis(index) {
  //   this.swiper2.swiper.slideTo(index);
  //   this.swiper2.slideTo
  // }

  // selectedDay(j){
  //   console.log(this.SelectDay);
  //   console.log(j);

  // }
}
