import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/web/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'stormyhome',
    pathMatch: 'full'
  },
  {
    path: 'calendar',
    loadChildren: () => import('./pages/web/calendar/calendar.module').then( m => m.CalendarPageModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./pages/web/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
  {
    path: 'stormyhome',
    loadChildren: () => import('./stormyhome/stormyhome.module').then( m => m.StormyhomePageModule)
  },
  {
    path: 'home-mobile',
    loadChildren: () => import('./pages/mobile/home-mobile/home-mobile.module').then( m => m.HomeMobilePageModule)
  },
  {
    path: 'todo-list',
    loadChildren: () => import('./pages/mobile/todo-list/todo-list.module').then( m => m.TodoListPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
