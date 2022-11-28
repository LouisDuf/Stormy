import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { EdtCardDetailPage } from './edt-card-detail.page';

const routes: Routes = [
  {
    path: '',
    component: EdtCardDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class EdtCardDetailPageRoutingModule {}
