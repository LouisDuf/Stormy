import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HomeMobilePageRoutingModule } from './home-mobile-routing.module';

import { HomeMobilePage } from './home-mobile.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomeMobilePageRoutingModule
  ],
  declarations: [HomeMobilePage]
})
export class HomeMobilePageModule {}
