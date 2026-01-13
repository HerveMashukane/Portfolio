import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';
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
  projects: any = [
  {
    id: 1,
    title: 'AlliaStore',
    text: 'A production Angular e-commerce app with Supabase backend, live in the market. Features authentication, role-based admin controls, and dynamic product management.',
    image: '/assets/images/alliaStore.png',
    link: 'https://allia-store.netlify.app',
    btnText: 'View Project',
    tech: ['Angular', 'Supabase', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 2,
    title: 'Foodera',
    text: 'Interactive web app for food services, built with Angular, Tailwind CSS, and TypeScript. Features carousel for client testimonials and fully responsive design.',
    image: '/assets/images/foodieApp.png',
    link: 'https://herve-foodieapp.netlify.app/',
    btnText: 'View Project',
    tech: ['Angular', 'Tailwind CSS', 'TypeScript']
  },
  {
    id: 3,
    title: 'HiroMate Dashboard',
    text: 'Dynamic students dashboard with add/update/remove functionality, built using Angular, Tailwind CSS, and TypeScript. Fully responsive and interactive.',
    image: '/assets/images/studentDashboard.png',
    link: 'https://herve-hiromate.netlify.app/',
    btnText: 'View Project',
    tech: ['Angular', 'Tailwind CSS', 'TypeScript']
  }
];
  
ngOnInit() {
  this.CheckScreenSize();
}

// check screen size
@HostListener('window:resize', ['$event'])
CheckScreenSize() {
  this.isSmallScreen = window.innerWidth < 768;
}

// toggle menu only on small screens
toggleMenu() {
  if (this.isSmallScreen) {
    this.isClicked = !this.isClicked;
  }
}

// close menu automatically after clicking a link
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
  // form: FormGroup

  // constructor() {
  //   this.form = new FormGroup({
  //     email: new FormControl('', [
  //       Validators.required,
  //       Validators.email
  //     ])
  //   })
  // }

  // get email() {
  //   return this.form.get('email')
  // }

  // getEmailErrorMessage() {
  //   if(this.email?.hasError('required')){
  //     return 'Email is required'
  //   }
  //   else if(this.email?.hasError('email')){
  //     return 'Please enter a valid email'
  //   }
  //   return;
  // }
}