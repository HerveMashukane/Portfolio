import { Component, ElementRef, HostListener, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})

export class PortfolioComponent {
  isClicked: boolean = false;
  isSmallScreen: boolean = false;
  projects:any = [
    {
      id: 1,
      title: 'HiroMate Dashboard',
      text: 'A sample screenshot of an interactive, dynamic and responsive students dashboard of a company named HiroMate, built in Angular, TypeScript and Tailwind CSS, having a student form, adds new students, displays their details, removes, updates, toggle their status and saves them.',
      image: '/assets/images/studentDashboard.png',
      btnText: 'View Project'
    },
    {
      id: 2,
      title: 'Foodera',
      text: 'A sample screenshot of an interactive Web application for food, built in Angular, TypeScript and Tailwind CSS, with a caroussel implementation for clients testmonials and responsive on multiple devices.',
      image: '/assets/images/foodieApp.png',
      btnText: 'View Project'
    },
    {
      id: 3,
      title: 'WebDev',
      text: 'Screenshot of a responsive website template built in HTML & CSS for web design and development courses.',
      image: '/assets/images/website-template.png',
      btnText: 'View Project'
    },
    {
      id: 4,
      title: 'Interior House Design',
      text: 'A sample of a Website template for interior house designing services and products with inputs form validation built in HTML, CSS and JavaScript',
      image: '/assets/images/house-design.png',
      btnText: 'View Project'
    },
  ]
  // check screen size
  @HostListener('window: resize', [])
  checkScreenSize() {
    this.isSmallScreen = window.innerWidth < 760;
  }

  // toggle menu
  toggleMenu() {
    this.isClicked = !this.isClicked;
    if(!this.isSmallScreen) {
      this.isClicked = true;
    }
  }

  // projects navigation
  currentIndex = 0;
  goToProject(i: number) {
    this.currentIndex = i;
  }

  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('projcts') projectsSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  // scroll behaviour
  scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}