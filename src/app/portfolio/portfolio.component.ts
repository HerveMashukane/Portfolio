import { Component, ElementRef, HostListener, ViewChild, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css']
})
export class PortfolioComponent implements OnInit {
  isClicked: boolean = false;
  isSmallScreen: boolean = false;

  currentIndex = 0;

  projects: any = [
    {
      id: 1,
      title: 'AlliaStore',
      text: 'A production Angular e-commerce app with Supabase backend, live in the market. Features authentication, role-based admin controls, and dynamic product management.',
      image: '/assets/images/alliaStore.jpg',
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

  // Form validation
  contactForm = new FormGroup({
    name: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.email]),
    message: new FormControl('', [Validators.required])
  });

  @ViewChild('home') homeSection!: ElementRef;
  @ViewChild('about') aboutSection!: ElementRef;
  @ViewChild('skills') skillsSection!: ElementRef;
  @ViewChild('projcts') projectsSection!: ElementRef;
  @ViewChild('contact') contactSection!: ElementRef;

  ngOnInit() {
    this.CheckScreenSize();
  }

  @HostListener('window:resize', ['$event'])
  CheckScreenSize() {
    this.isSmallScreen = window.innerWidth < 768;
  }

  toggleMenu() {
    if (this.isSmallScreen) {
      this.isClicked = !this.isClicked;
    }
  }

  autoCloseMenu(): void {
    if (this.isSmallScreen) {
      this.isClicked = false;
    }
  }

  scrollToSection(section: ElementRef) {
    section.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  previousProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  goToProject(i: number) {
    this.currentIndex = i;
  }

  get name() { return this.contactForm.get('name'); }
  get email() { return this.contactForm.get('email'); }
  get message() { return this.contactForm.get('message'); }

  submitForm() {
    if (this.contactForm.valid) {
      console.log('Form submitted:', this.contactForm.value);
      this.contactForm.reset();
      alert('Message sent successfully!');
    } else {
      this.contactForm.markAllAsTouched();
    }
  }
}
