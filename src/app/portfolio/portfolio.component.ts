import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  projects:any = [
    {
      text: 'Students dashboard management',
      image: '/assets/images/studentDashboard.png',
    },
    {
      text: 'foodie app for delicious food',
      image: '/assets/images/foodieApp.png',
    },
    {
      text: 'a website temolate built in HTML & CSS',
      image: '/assets/images/website-template.png',
    },
    {
      text: 'A todo application for tasks management',
      image: '/assets/images/todoApp.png',
    },
    {
      text: 'a template for designing the inside of a house along with inputs form validation',
      image: '/assets/images/house-design.png',
    },
  ]

  currentIndex = 0;

  getProject(i: number) {
    this.currentIndex = i;
  }
}
