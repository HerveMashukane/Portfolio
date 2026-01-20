import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
export const routes: Routes = [
    {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadComponent: () =>
          import('./pages/home-page/home-page.component')
            .then(m => m.HomePageComponent)
      },
      {
        path: 'about',
        loadComponent: () =>
          import('./pages/about-page/about-page.component')
            .then(m => m.AboutPageComponent)
      },
      {
        path: 'skills',
        loadComponent: () =>
          import('./pages/skills-page/skills-page.component')
            .then(m => m.SkillsPageComponent)
      },
      {
        path: 'projects',
        loadComponent: () =>
          import('./pages/projects-page/projects-page.component')
            .then(m => m.ProjectsPageComponent)
      },
      {
        path: 'contact',
        loadComponent: () =>
          import('./pages/contact-page/contact-page.component')
            .then(m => m.ContactPageComponent)
      },
      {
        path: '**',
        redirectTo: ''
      }
    ]
  },
];
