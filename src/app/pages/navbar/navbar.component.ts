import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent, map, merge, Observable, startWith } from 'rxjs';
import { isPlatformBrowser } from '@angular/common';
import { inject, PLATFORM_ID } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  // boolean variable to chek clicked menu
  isClicked = false;

  // check if platform is a browser and connection status
  private platformId = inject(PLATFORM_ID);
  isOnline$!: Observable<boolean>;

  constructor() {}
  ngOnInit() {
    // connection status
    if (isPlatformBrowser(this.platformId)) {
      this.isOnline$ = merge(
        fromEvent(window, 'online'),
        fromEvent(window, 'offline')
      ).pipe(
        map(() => navigator.onLine),
        startWith(navigator.onLine)
      );
    }
    // check screen size
    this.checkScreenSize();
  }

  toggleMenu() {
    this.isClicked = !this.isClicked;
  }

  @HostListener('window:resize', [])
  onResize() {
    this.checkScreenSize();
  }

  private checkScreenSize() {
    if (window.innerWidth >= 768) {
      this.isClicked = false;
    }
  }

  closeMenu() {
    this.isClicked = false;
  }
}
