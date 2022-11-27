import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddModalPageRoutingModule } from './add-modal-routing.module';

import { AddModalPage } from './add-modal.page';
import { InputComponent } from 'src/app/components/input/input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddModalPageRoutingModule,
    InputComponent
  ],
  declarations: [AddModalPage,InputComponent]
})
export class AddModalPageModule {}
