import { Component, OnInit, Inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  imports: [CommonModule],
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  isClicked = false;
  isBrowser: boolean;

  constructor(@Inject(PLATFORM_ID) private platformId: Object) {
    this.isBrowser = isPlatformBrowser(this.platformId);
  }

  ngOnInit() {
    if (this.isBrowser) {
      this.CheckScreenSize();
      window.addEventListener('resize', () => this.CheckScreenSize());
    }
  }

  toggleMenu() {
    this.isClicked = !this.isClicked;
  }

  autoCloseMenu() {
    this.isClicked = false;
  }

  CheckScreenSize() {
    if (!this.isBrowser) return;

    // Example logic: close menu on large screens
    if (window.innerWidth > 768) {
      this.isClicked = false;
    }
  }
}
