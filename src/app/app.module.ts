import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { EventDialogComponent } from './event-dialog/event-dialog.component';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    EventDialogComponent,
    CalendarDayComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
