import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { JourComponent } from '../components/jour/jour.component';
import { SwiperModule } from 'swiper/angular';
import { EDTcardComponent } from '../components/edtcard/edtcard.component';
import { ProfilModalComponent } from '../components/profil-modal/profil-modal.component';
import { SettingsComponent } from '../components/settings/settings.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    Tab1PageRoutingModule,
    SwiperModule
  ],
  declarations: [Tab1Page,JourComponent,EDTcardComponent,ProfilModalComponent,SettingsComponent]
})
export class Tab1PageModule {}
