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
