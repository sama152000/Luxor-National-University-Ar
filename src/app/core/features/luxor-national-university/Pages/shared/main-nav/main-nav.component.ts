import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../../Services/navigation.service';
import { NavigationItem } from '../../../model/common.model';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <header class="main-header sticky-header">
      <div class="container-custom nav-inner">
        <!-- Logo Box -->
        <div class="logo-box hover-lift">
          <img src="./assets/lnu.logo.png"
               alt="جامعة الأقصر القومية" 
               class="logo-img">
        </div>

        <!-- Navigation -->
        <nav class="circle-menu">
          <a 
            *ngFor="let item of navigationItems"
            [routerLink]="item.route"
            routerLinkActive="active"
            class="menu-item"
          >
            <i [class]="item.icon"></i>
            <span>{{ item.label }}</span>
          </a>
        </nav>
      </div>
    </header>
  `,
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent implements OnInit {
  navigationItems!: NavigationItem[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationItems = this.navigationService.getNavigationItems();
  }
}
