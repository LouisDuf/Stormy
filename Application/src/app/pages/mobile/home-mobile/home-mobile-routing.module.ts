import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeMobilePage } from './home-mobile.page';

const routes: Routes = [
  {
    path: '',
    component: HomeMobilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeMobilePageRoutingModule {}
