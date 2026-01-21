import { CommonModule } from '@angular/common';
import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule, RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isClicked: boolean = false;
  isSmallScreen: boolean = false;

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
}
