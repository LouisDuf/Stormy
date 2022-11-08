import { NgModule } from '@angular/core';

import { ContentHomeComponent } from './content-home/content-home.component';
import { ContentCalendarComponent } from './content-calendar/content-calendar.component';

@NgModule({
  declarations: [ContentHomeComponent, ContentCalendarComponent],
  exports: [ContentHomeComponent, ContentCalendarComponent]
})
export class ComponentsModule {}
