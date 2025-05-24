import { Component } from '@angular/core';
import { Location } from '@angular/common';

@Component({
  selector: 'app-timeslot',
  templateUrl: './timeslot.component.html',
  styleUrls: ['./timeslot.component.scss']
})
export class TimeslotComponent {
  constructor(private location: Location) {}

  selected: Date | null = null;

  timeslots = ['08:00', '08:30', '09:00', '09:30', '10:00', '10:30', '11:00', '11:30', '12:00', '12:30',
    '13:00', '13:30', '14:00', '14:30', '15:00', '15:30', '16:00', '16:30']


  onDateChange(date: Date) {
    console.log('Date selected:', date);
  }

  goBack() {
  this.location.back();
}

}
