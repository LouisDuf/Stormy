import { AfterContentChecked, Component, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import { from } from 'rxjs';
import SwiperCore, { Pagination, SwiperOptions } from 'swiper';
import {SwiperComponent } from 'swiper/angular';


SwiperCore.use([Pagination]);
@Component({
  selector: 'app-pre-one',
  templateUrl: './pre-one.page.html',
  styleUrls: ['./pre-one.page.scss'],
  encapsulation: ViewEncapsulation.None,
})
export class PreOnePage implements OnInit,AfterContentChecked { //  {
  @ViewChild('swiper') swiper: SwiperComponent;
  constructor(private router: Router) { }
  ngOnInit() {
  }

  config: SwiperOptions = {
    pagination: true,
    slidesPerView: 1,

    // [pagination]="{
    //   clickable: true
    // }"
    // [breakpoints]="{
    //   '640': {
    //     slidesPerView: 2,
    //     spaceBetween: 20
    //   },
    //   '768': {
    //     slidesPerView: 4,
    //     spaceBetween: 40
    //   },
    //   '1024': {
    //     slidesPerView: 5,
    //     spaceBetween: 50
    //   }
    // }"

  }

  navigateToLoginPage() {
    this.router.navigate(['/login']);
  }
  
  ngAfterContentChecked(): void {
    if(this.swiper){
      this.swiper.updateSwiper({});
    }
  }
}
