import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddModal2Page } from './add-modal2.page';

const routes: Routes = [
  {
    path: '',
    component: AddModal2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddModal2PageRoutingModule {}
