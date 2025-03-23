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
      title: 'HiroMate Dashboard',
      text: 'A sample screenshot of an interactive, dynamic and responsive students dashboard built in Angular, TypeScript and Tailwind CSS, having a student form, displays their details, adds new students, removes, updates and saves them.',
      image: '/assets/images/studentDashboard.png',
    },
    {
      title: 'Foodera',
      text: 'A sample screenshot of an interactive Web application for food, built in Angular, TypeScript and Tailwind CSS, with a caroussel implementation for clients testmonials and responsive to multiple devices.',
      image: '/assets/images/foodieApp.png',
    },
    {
      title: 'WebDev',
      text: 'Screenshot of a responsive website template built in HTML & CSS for web design and development courses.',
      image: '/assets/images/website-template.png',
    },
    {
      title: 'To-Do Application',
      text: 'Screenshot of a to-do list application for tasks management built in HTML, CSS and JavaScript.',
      image: '/assets/images/todoApp.png',
    },
    {
      title: 'A sample screenshot of an interior House Design',
      text: 'A sample of a Website template for interior house designing services and products with inputs form validation built in HTML, CSS and JavaScript',
      image: '/assets/images/house-design.png',
    },
  ]

  currentIndex = 0;

  getProject(i: number) {
    this.currentIndex = i;
  }
}
