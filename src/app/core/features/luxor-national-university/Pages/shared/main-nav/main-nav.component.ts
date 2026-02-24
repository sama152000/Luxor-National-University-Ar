import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NavigationService } from '../../../Services/navigation.service';
import { NavigationItem } from '../../../model/common.model';

@Component({
  selector: 'app-main-nav',
  standalone: true,
  imports: [CommonModule, RouterModule],
templateUrl: './main-nav.component.html',
  styleUrl: './main-nav.component.css'
})
export class MainNavComponent implements OnInit {
  navigationItems!: NavigationItem[];

  constructor(private navigationService: NavigationService) {}

  ngOnInit(): void {
    this.navigationItems = this.navigationService.getNavigationItems();
  }
}
