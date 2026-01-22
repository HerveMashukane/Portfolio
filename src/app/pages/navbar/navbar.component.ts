import { CommonModule } from '@angular/common';
import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isClicked = false;

  constructor() {}
  ngOnInit() {
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
