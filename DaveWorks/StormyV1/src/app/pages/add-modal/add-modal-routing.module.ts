import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddModalPage } from './add-modal.page';

const routes: Routes = [
  {
    path: '',
    component: AddModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddModalPageRoutingModule {}
