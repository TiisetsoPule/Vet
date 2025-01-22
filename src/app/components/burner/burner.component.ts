import { Component } from '@angular/core';

@Component({
  selector: 'app-burner',
  templateUrl: './burner.component.html',
  styleUrls: ['./burner.component.scss']
})
export class BurnerComponent {
  rating: number = 4.6; 
  maxStars: number = 5; 

  reviews = [
    {
      rating: 5, 
      review: 'The Animal Clinic staff and management is absolutely stunning with everything they do and keep you updated the whole time your animal is there. Very professional service.'
    },
    {
      rating: 5, 
      review: ' '
    },
    {
      rating: 5, 
      review: 'The best vet clinic in Joburg!! Dr Anton & Dr Megan were just absolutely fantastic, caring and wonderful! Thank you for all you did for our old Hannah, you all are angels and I will recommend you to anyone. No words to describe my gratitude.'
    },
    {
      rating: 5, 
      review: 'Fast and friendly staff. Love them. Take all our animals there.'
    },    {
      rating: 5, 
      review: 'Excellent and perfect 👌 …'
    },    {
      rating: 4, 
      review: ' '
    },    {
      rating: 5, 
      review: 'Dr Jansen is EVERYTHING. Thats the reason for my 5☆. The reception ladies not so much but I wont elaborate too much on this because like I said...Dr Jansen is a Legend in my eyes 🙌🏽 …'
    },    {
      rating: 5, 
      review: 'Great local vet. Prices are fair and reasonable.'
    },    {
      rating: 4, 
      review: ' '
    },
  ]

  
  fullStars(rating: number) {
    return Array(Math.floor(rating)).fill(0);
  }

  
  hasHalfStar(rating: number) {
    return rating % 1 !== 0;
  }

  
  emptyStars(rating: number) {
    return Array(this.maxStars - Math.ceil(rating)).fill(0);
  }
}
