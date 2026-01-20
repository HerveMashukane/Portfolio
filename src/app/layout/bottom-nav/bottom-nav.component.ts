import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-bottom-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive],
  templateUrl: './bottom-nav.component.html',
  styleUrl: './bottom-nav.component.css'
})
export class BottomNavComponent implements OnInit {
  cartCount$!: Observable<number>;
  isAdmin$!: Observable<boolean>;

  constructor(
    public router: Router,
    private cartService: CartService,
    private adminService: AdminService
  ) {}

  ngOnInit() {
    this.cartCount$ = this.cartService.cartCount$;
    this.isAdmin$ = this.adminService.isAuthenticated$;
  }

  isActive(route: string): boolean {
    return this.router.url === route || this.router.url.startsWith(route + '/');
  }
}



