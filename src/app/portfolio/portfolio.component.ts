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
  projects: any = [
    {
      text: 'hello project one',
      image: '/assets/images/studentDashboard.png',
    },
    {
      text: 'hello project one',
      image: '/assets/images/foodieApp.png',
    },
    {
      text: 'hello project one',
      image: '/assets/images/website-template.png',
    },
    {
      text: 'hello project one',
      image: '/assets/images/todoApp.png',
    },
    {
      text: 'hello project one',
      image: '/assets/images/house-design.png',
    },
  ]
}
