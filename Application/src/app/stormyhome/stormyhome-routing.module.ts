import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { StormyhomePage } from './stormyhome.page';

const routes: Routes = [
  {
    path: '',
    component: StormyhomePage,
    children: [
      {
        path: 'homeMobile',
        loadChildren: () => import('../pages/mobile/home-mobile/home-mobile.module').then( m => m.HomeMobilePageModule)
      },
      {
        path: 'todo-list',
        loadChildren: () => import('../pages/mobile/todo-list/todo-list.module').then( m => m.TodoListPageModule)
      },
      {
        path: 'homeDesktop',
        loadChildren: () => import('../pages/web/home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'calendar',
        loadChildren: () => import('../pages/web/calendar/calendar.module').then( m => m.CalendarPageModule)
      },
      {
        path: 'todo',
        loadChildren: () => import('../pages/web/todo-list/todo-list.module').then( m => m.TodoListPageModule)
      }
    ]
  },
  {
    path: '',
    redirectTo: '/stormyhome/todo',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class StormyhomePageRoutingModule {}
