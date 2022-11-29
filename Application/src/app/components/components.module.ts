import { NgModule, Injectable } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CardAjoutComponent } from './card-ajout/card-ajout.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [CardAjoutComponent,TaskComponent],
  imports: [FormsModule],
  exports: [CardAjoutComponent,TaskComponent]
})
export class ComponentsModule {}