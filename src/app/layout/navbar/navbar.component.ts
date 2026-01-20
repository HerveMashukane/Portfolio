import { CommonModule } from '@angular/common';
import { Component, ElementRef, HostListener, ViewChild } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isClicked: boolean = false;
  isSmallScreen: boolean = false;

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
}
