import { NgModule } from '@angular/core';

import { CardAjoutComponent } from './card-ajout/card-ajout.component';
import { TaskComponent } from './task/task.component';

@NgModule({
  declarations: [CardAjoutComponent,TaskComponent],
  exports: [CardAjoutComponent,TaskComponent]
})
export class ComponentsModule {}