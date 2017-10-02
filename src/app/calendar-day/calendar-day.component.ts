import {Component, ElementRef, Input} from '@angular/core';
import {createGUID, weekDays, months, allMonthsInfo, days} from '../other/index';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent {

  @Input()
  date: Date;
  @Input()
  week: number;
  day: number;

  constructor() {
    setInterval(() => {
      this.day = this.date.getDate();
    }, 0);

    if (this.week === 0 || this.week === 6) {
      const el = document.querySelector('.week');
      el.querySelector('weekend'); // add class or edit style
    }
  }


  static getDifference(firstDate, secondDate) {
    return 11; // parseInt((secondDate - firstDate) / (1000 * 60 * 60 * 24));
  }

  getPromise(date) {
    const nowDate = new Date();
    const dayDifference = CalendarDayComponent.getDifference(nowDate, date);
    return new Promise((resolve, reject) => {
      if (dayDifference < 1) {
        alert('incorrect');
        return;
      }
      const time = 1000 * 24 * 3600 * (dayDifference - 1);
      setTimeout(resolve, time);
    });
  }

  addEvent(date) {
    this.getPromise(this.date).then(() => {
      // this.events.push(); // todo push event from event-dialog
      alert('event');
    });
  }
}
