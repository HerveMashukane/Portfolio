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
        title: 'MediHelper – Healthcare Management Dashboard',
        problem: 'Healthcare systems require structured and efficient tools to manage patients, appointments, billing, and staff operations. Many existing solutions are either too complex or lack essential features, leading to inefficiencies and suboptimal patient care.',
        solution: 'MediHelper provides a comprehensive solution for managing healthcare operations with an intuitive interface and robust functionality.',
        keyFeatures: ['Patient and doctor management system', 'Appointment scheduling module', 'Billing and reporting system', 'Modular dashboard architecture'],
        image: '/assets/images/medihelper.png',
        link: 'https://medihelper-app.netlify.app/',
        btnText: 'View Project',
        tech: ['Angular', 'Tailwind CSS', 'TypeScript']
      },
      {
        id: 2,
        title: 'AlliaStore – E-commerce Frontend Application',
        problem: 'E-commerce platforms need intuitive and efficient interfaces to manage products, orders, and customer interactions. Existing solutions often lack seamless integration or fail to provide a satisfactory user experience.',
        solution: 'AlliaStore offers a modern e-commerce frontend application with a responsive design, streamlined authentication, and comprehensive admin capabilities.',
        keyFeatures: ['Responsive user interface', 'Authentication flows', 'Admin dashboard UI', 'Dynamic product management'],
        image: '/assets/images/alliaStore.png',
        link: 'https://allia-store.netlify.app',
        btnText: 'View Project',
        tech: ['Angular', 'Supabase', 'Tailwind CSS', 'TypeScript']
      },
      {
        id: 3,
        title: 'ForwardToSuccess – Education & Training Platform',
        problem: 'Students and learners need a flexible platform to access language, digital skills, and practical courses. Existing platforms either lack hands-on experiences or are not accessible both online and offline.',
        solution: 'ForwardToSuccess provides a hybrid learning experience with real-world training, certified instructors, and interactive features that inspire and accelerate student growth.',
        keyFeatures: [
          'Flexible online & offline classes',
          'Industry-experienced trainers',
          'Certificate-ready programs',
          'Student testimonial carousel'
        ],
        image: '/assets/images/fts.png',
        link: 'https://forward-to-success.vercel.app/',
        btnText: 'View Project',
        tech: ['React', 'TypeScript', 'Tailwind CSS']
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
