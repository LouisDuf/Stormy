import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { EDTcardComponent } from '../components/edtcard/edtcard.component';
import { SwiperModule } from 'swiper/angular';
import { JourComponent } from '../components/jour/jour.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab2PageRoutingModule,
    SwiperModule
    ],
  declarations: [Tab2Page,EDTcardComponent,JourComponent]
})
export class Tab2PageModule {}
