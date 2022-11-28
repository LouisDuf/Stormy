import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EdtCardDetailPageRoutingModule } from './edt-card-detail-routing.module';

import { EdtCardDetailPage } from './edt-card-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EdtCardDetailPageRoutingModule
  ],
  declarations: [EdtCardDetailPage]
})
export class EdtCardDetailPageModule {}
