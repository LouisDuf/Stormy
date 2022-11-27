import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddModal2PageRoutingModule } from './add-modal2-routing.module';

import { AddModal2Page } from './add-modal2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddModal2PageRoutingModule
  ],
  declarations: [AddModal2Page]
})
export class AddModal2PageModule {}
