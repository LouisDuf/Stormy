import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PreOnePage } from './pre-one.page';

const routes: Routes = [
  {
    path: '',
    component: PreOnePage,
    children: [
      {
        path: '',
        loadChildren: () => import('../../pages/welcome/welcome.module').then(m => m.WelcomePageModule)
      },
      {
        path: 'login',
        loadChildren: () => import('../../pages/login/login.module').then(m => m.LoginPageModule)
      },
      {
        path: 'signup',
        loadChildren: () => import('../../pages/signup/signup.module').then(m => m.SignupPageModule)
      }
    ]  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PreOnePageRoutingModule {}
