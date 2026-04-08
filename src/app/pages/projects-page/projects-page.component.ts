import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-projects-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './projects-page.component.html',
  styleUrls: ['./projects-page.component.css']
})
export class ProjectsPageComponent {
  isSmallScreen: boolean = false;
  currentIndex = 0;

  projects: any[] = [
    {
      id: 1,
      title: 'MediHelper – Healthcare Management Dashboard',
      problem: 'Healthcare systems need efficient tools to manage patients, appointments, billing, and staff operations. Many existing solutions are either overly complex or lack essential features, resulting in workflow inefficiencies.',
      solution: 'MediHelper delivers a comprehensive healthcare management dashboard with an intuitive interface and modular features, streamlining administrative tasks and improving patient care.',
      keyFeatures: [
        'Patient and doctor management system',
        'Appointment scheduling module',
        'Billing and reporting system',
        'Modular and scalable dashboard architecture'
      ],
      image: '/assets/images/medihelper.png',
      link: 'https://medihelper-app.netlify.app/',
      btnText: 'View Project',
      tech: ['Angular', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 2,
      title: 'AlliaStore – E-commerce Frontend Application',
      problem: 'E-commerce platforms often struggle with complex interfaces and poor user experiences, making it difficult for businesses to efficiently manage products, orders, and customer interactions.',
      solution: 'AlliaStore provides a modern, responsive e-commerce frontend with streamlined authentication, dynamic product management, and an intuitive admin dashboard for seamless operations.',
      keyFeatures: [
        'Fully responsive user interface',
        'Secure authentication flows',
        'Admin dashboard with full product management',
        'Optimized for smooth user experience'
      ],
      image: '/assets/images/alliaStore.png',
      link: 'https://allia-store.netlify.app',
      btnText: 'View Project',
      tech: ['Angular', 'Supabase', 'Tailwind CSS', 'TypeScript']
    },
    {
      id: 3,
      title: 'ForwardToSuccess – Education & Training Platform',
      problem: 'Learners need flexible, hands-on platforms to access language, digital, and practical courses. Most platforms are either inaccessible offline or lack interactive, real-world training features.',
      solution: 'ForwardToSuccess offers a hybrid learning platform with online/offline accessibility, certified instructors, and interactive tools designed to accelerate student growth and engagement.',
      keyFeatures: [
        'Flexible online & offline learning modules',
        'Industry-experienced trainers and certified programs',
        'Interactive courses with real-world projects',
        'Student testimonial carousel to showcase impact'
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