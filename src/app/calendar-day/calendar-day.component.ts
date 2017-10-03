import {Component, ElementRef, Input} from '@angular/core';
import {storage, createGUID, weekDays, months, allMonthsInfo, days} from '../other/index';


@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.css']
})
export class CalendarDayComponent {

  @Input()
  date: Date;
  @Input()
  week: string;
  day: number;

  constructor() {
    setInterval(() => {
      this.day = this.date.getDate();
    }, 0);
  }


  static getDifference(firstDate, secondDate) {
    return +((secondDate - firstDate) / (1000 * 60 * 60 * 24));
  }

  getPromise(date) {
    const nowDate = new Date();
    const dayDifference = CalendarDayComponent.getDifference(nowDate, date);

    return new Promise((resolve) => {
      if (dayDifference < 1) {
        alert('incorrect');
        return;
      }

      const title = prompt('Title', 'noTitle');
      if (title) {
        storage.push({
          eventId: createGUID(),
          title,
          date,
          settingDate: nowDate
        });

        const time = 1000 * 24 * 3600 * (dayDifference - 1);
        setTimeout(resolve, time);
      }
    });
  }

  addEvent(date) {
    this.getPromise(this.date).then(() => {
      alert(`event in ${date}`);
    });
  }

  isFeature() {
    return CalendarDayComponent.getDifference(new Date(), this.date) >= 1;
  }

  style() {
    return {'color': this.week === 'Sunday' || this.week === 'Saturday' ? 'red' : 'black'};
  }
}
