import { Component, ElementRef, HostListener, viewChild, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
    selector: 'app-portfolio',
    imports: [CommonModule, FormsModule, ReactiveFormsModule],
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
      btnText: 'Full Project',
      link: 'https://herve-hiromate.netlify.app/'
    },
    {
      id: 2,
      title: 'Foodera',
      text: 'A sample screenshot of an interactive Web application for food, built in Angular, TypeScript and Tailwind CSS, with a caroussel implementation for clients testmonials and responsive on multiple devices.',
      image: '/assets/images/foodieApp.png',
      btnText: 'Full Project',
      link: 'https://herve-foodieapp.netlify.app/'
    },
    {
      id: 3,
      title: 'Portfolio',
      text: 'Screenshot of a fully responsive personal portfolio built in Angular, TypeScript and Tailwind CSS.',
      image: '/assets/images/portfolio.png',
      btnText: 'Full Project',
      link: 'https://herve-portfolio.netlify.app/'
    },

  ]
  // check screen size
  @HostListener('window:resize', ['$event'])
  CheckScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  // toggle menu
  toggleMenu() {
    this.isClicked = !this.isClicked;
    if(!this.isSmallScreen) {
      this.isClicked = true;
    }
  }

  // close the menu automatically on sm screens when clicked
  autoCloseMenu(): void {
    if (this.isSmallScreen) {
      this.isClicked = false;
    }
  }  

  // projects dots navigation
  currentIndex = 0;
  goToProject(i: number) {
    this.currentIndex = i;
  }

  // previous projects navigation
  previousProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  // next projects navigation
  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
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

  // validation errors
  form: FormGroup

  constructor() {
    this.form = new FormGroup({
      name: new FormControl('', [
        Validators.required,
        Validators.pattern('^[A-Za-z ]+')
      ]),

      email: new FormControl('', [
        Validators.required,
        Validators.email
      ])
    })
  }

  get name() {
    return this.form.get('name')
  }
  get email() {
    return this.form.get('email')
  }

  getNameErrorMessage() {
    if(this.name?.hasError('required')) {
      return 'Name is required'
    }
    else if(this.name?.hasError('pattern')){
      return 'Name does not match the pattern'
    }
    return;
  }

  getEmailErrorMessage() {
    if(this.email?.hasError('required')){
      return 'Email is required'
    }
    else if(this.email?.hasError('email')){
      return 'Please enter a valid email'
    }
    return;
  }
}