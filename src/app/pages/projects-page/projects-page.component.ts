import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrl: './projects-page.component.css'
})
export class ProjectsPageComponent {
  isSmallScreen: boolean = false;
  currentIndex = 0;
  
    projects: any = [
      {
        id: 1,
        title: 'MediHelper',
        text: 'MediHelper is a healthcare management dashboard built with Angular, TypeScript, and Tailwind CSS. It includes structured modules such as patients, doctors, appointments, billing, and administration. The platform is designed with a focus on scalability, clean UI, and efficient user workflows for managing complex systems.',
        image: '/assets/images/medihelper.png',
        link: 'https://medihelper-app.netlify.app/',
        btnText: 'View Project',
        tech: ['Angular', 'Tailwind CSS', 'TypeScript']
      },
      {
        id: 2,
        title: 'AlliaStore',
        text: 'AlliaStore is a modern e-commerce frontend application built with Angular, TypeScript, and Tailwind CSS. It features a responsive user interface, authentication flows, admin dashboard UI, and dynamic product management screens. The project focuses on delivering a clean, scalable, and user-friendly shopping experience.',
        image: '/assets/images/alliaStore.png',
        link: 'https://allia-store.netlify.app',
        btnText: 'View Project',
        tech: ['Angular', 'Supabase', 'Tailwind CSS', 'TypeScript']
      },
      {
        id: 3,
        title: 'Foodera',
        text: 'Interactive web app for food services, built with Angular, Tailwind CSS, and TypeScript. Features carousel for client testimonials and fully responsive design.',
        image: '/assets/images/foodieApp.png',
        link: 'https://herve-foodieapp.netlify.app/',
        btnText: 'View Project',
        tech: ['Angular', 'Tailwind CSS', 'TypeScript']
      },
    ];

    previousProject() {
    this.currentIndex = (this.currentIndex - 1 + this.projects.length) % this.projects.length;
  }

  nextProject() {
    this.currentIndex = (this.currentIndex + 1) % this.projects.length;
  }

  goToProject(i: number) {
    this.currentIndex = i;
  }
}
