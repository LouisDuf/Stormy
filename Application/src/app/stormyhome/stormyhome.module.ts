import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { StormyhomePageRoutingModule } from './stormyhome-routing.module';

import { StormyhomePage } from './stormyhome.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    StormyhomePageRoutingModule
  ],
  declarations: [StormyhomePage]
})
export class StormyhomePageModule {}
