import { Component } from '@angular/core';

@Component({
  selector: 'app-burner',
  templateUrl: './burner.component.html',
  styleUrls: ['./burner.component.scss']
})
export class BurnerComponent {
  rating: number = 4.6; 
  maxStars: number = 5; 

  
  get fullStars() {
    return Array(Math.floor(this.rating)).fill(0);
  }

  
  get hasHalfStar() {
    return this.rating % 1 !== 0;
  }

  
  get emptyStars() {
    return Array(this.maxStars - Math.ceil(this.rating)).fill(0);
  }
}
