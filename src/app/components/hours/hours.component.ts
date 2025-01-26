import { Component } from '@angular/core';

@Component({
  selector: 'app-hours',
  templateUrl: './hours.component.html',
  styleUrls: ['./hours.component.scss']
})
export class HoursComponent {

  hours = [
    {day: "Mon", time: '9am - 6pm'},
    {day: "Tue", time: '9am - 7pm'},
    {day: "Wed", time: '9am - 5pm'},
    {day: "Thu", time: '9am - 6pm'},
    {day: "Fri", time: '9am - 5pm'},
    {day: "Sat", time: '9am - 1pm'},
    {day: "Sun", time: 'Closed'},
  ]

}
