import { Component } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {

  cards = [
    {
      text: 'Wellness and Vaccinations', 
      img: '../../../assets/pictures/wellness.svg'
    },
    {
      text: 'Surgery', 
      img: '../../../assets/pictures/surgery.svg'
    },
    {
      text: 'Dentistry', 
      img: '../../../assets/pictures/dentistry.svg'
    },
    {
      text: 'Acupunture', 
      img: '../../../assets/pictures/accu.svg'
    },
    {
      text: 'Lazer Therapy & PEMP', 
      img: '../../../assets/pictures/lazer.svg'
    },
    {
      text: 'Radiology', 
      img: '../../../assets/pictures/radiology.svg'
    }
  ]

}
