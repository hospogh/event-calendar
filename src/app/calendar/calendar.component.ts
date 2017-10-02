import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {createGUID, weekDays, months, allMonthsInfo, days} from '../other/index';
import {element} from 'protractor';

const getDaysArr = function (mntInd) {
  const length = allMonthsInfo[mntInd].days;
  return days.slice(0, length);
};

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

  @ViewChild('app-element-dialog')
  element: ElementRef;

  constructor() {
    this.month = new Date().getMonth();
    this.year = new Date().getFullYear();
    this.days = getDaysArr(this.month);
  }

  getWeekDay(day) {
    return weekDays[(new Date(this.year, this.month, day).getDay())];
  }

  getMonthName() {
    return months[this.month];
  }

  closeDialog() {
    this.element.nativeElement.style('display', 'none');
  }

  getNumberDate(number) {
    return new Date(this.year, this.month, number);
  }
}
