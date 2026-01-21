import { Component } from '@angular/core';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { SkillsPageComponent } from './pages/skills-page/skills-page.component';
import { ProjectsPageComponent } from './pages/projects-page/projects-page.component';
import { ContactPageComponent } from './pages/contact-page/contact-page.component';
import { AboutPageComponent } from "./pages/about-page/about-page.component";
import { NavbarComponent } from './pages/navbar/navbar.component';
import { FooterComponent } from './pages/footer/footer.component';

@Component({
  selector: 'app-root',
  imports: [NavbarComponent, 
            HomePageComponent, 
            AboutPageComponent, 
            SkillsPageComponent, 
            ProjectsPageComponent, 
            ContactPageComponent, 
            FooterComponent
          ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Portfolio';
}

