import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PreOnePageRoutingModule } from './pre-one-routing.module';
import { SwiperModule } from 'swiper/angular';

import { PreOnePage } from './pre-one.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PreOnePageRoutingModule,
    SwiperModule
  ],
  declarations: [PreOnePage]
})
export class PreOnePageModule {}
