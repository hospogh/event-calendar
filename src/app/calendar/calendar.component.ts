import {Component, OnInit} from '@angular/core';

const weekDays = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday'
];

const months = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December'
];
const allMonthsInfo = [
  {
    name: 'January',
    days: 31
  },
  {
    name: 'February',
    days: 29
  },
  {
    name: 'March',
    days: 31
  },
  {
    name: 'April',
    days: 30
  },
  {
    name: 'May',
    days: 31
  },
  {
    name: 'June',
    days: 30
  },
  {
    name: 'July',
    days: 31
  },
  {
    name: 'August',
    days: 31
  },
  {
    name: 'September',
    days: 30
  },
  {
    name: 'October',
    days: 31
  },
  {
    name: 'November',
    days: 30
  },
  {
    name: 'December',
    days: 31
  }
];

const days = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
const getDaysArr = function (mntInd) {
  const length = allMonthsInfo[mntInd].days;
  return days.slice(0, length);
};



const s4 = () => Math.random().toString(16).slice(-4);
const createGUID = () => `${s4()}${s4()}-${s4()}-${s4()}-${s4()}-${s4()}${s4()}${s4()}`;


class CalendarEvent {
  eventId: string = createGUID();
  title: string;
  description: string;
  date: Date;
}


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css']
})
export class CalendarComponent {
  month: number;
  year: number;
  days: number[];
  events: CalendarEvent[];



  constructor() {
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.days = getDaysArr(this.month);
  }

  getWeekDay (day) {
    return weekDays[(new Date(this.year, this.month, day).getDay())];
  }

  getMonthName() {
    return months[this.month];
  }

  getPromise(day) {
    const nowDate = new Date().getDate();
    return new Promise((resolve, reject) => {
      if(nowDate + 1 > day) {
        alert('incorrect');
        return;
      }
      const time = 1000 * 24 * 3600 * day - nowDate - 1;
      // const time = 3000;
      setTimeout(resolve, time);
    });
  };

  addEvent(day) {
    this.getPromise(day).then(() => alert('event'));
  }
}
