import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../../Services/navigation.service';
import { NavigationItem, LanguageOption } from '../../../model/navigation.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="header">
      <div class="container-custom">
        <div class="d-flex justify-content-between align-items-center">
          <!-- Logo -->
          <div class="d-flex align-items-center">
            <img
              [src]="universityInfo.logo"
              [alt]="getLocalizedText(universityInfo.name, universityInfo.nameAr)"
              class="logo"
            >
            <!-- <h5 class="text-white mb-0 ms-3 d-none d-md-block">
              {{ getLocalizedText(universityInfo.name, universityInfo.nameAr) }}
            </h5> -->
          </div>

          <!-- Language Switch & Menu -->
          <div class="d-flex align-items-center gap-3">
            <button
              class="language-switch"
              (click)="toggleLanguage()"
            >
              {{ currentLanguage | uppercase }}
            </button>
            
            <button 
              class="menu-button"
              (click)="toggleMenu()"
              aria-label="Open menu"
            >
              <i class="pi pi-bars"></i>
            </button>
          </div>
        </div>
      </div>
    </header>

    <!-- Menu Overlay -->
    <div 
      class="menu-overlay"
      *ngIf="isMenuOpen"
      (click)="closeMenuOverlay($event)"
    >
      <div class="menu-cards" (click)="$event.stopPropagation()">
        <div 
          *ngFor="let item of navigationItems; let i = index"
          class="menu-card hover-lift"
          (click)="navigateAndCloseMenu(item.route)"
        >
          <div class="icon-container">
            <i [class]="item.icon" class="menu-icon"></i>
          </div>
          <h6 class="mb-0 text-white">{{ getLocalizedText(item.title, item.titleAr) }}</h6>
        </div>
      </div>
      
      <button 
        class="btn btn-light position-absolute top-0 end-0 m-4"
        (click)="closeMenu()"
        aria-label="Close menu"
      >
        <i class="pi pi-times"></i>
      </button>
    </div>
  `,
  styles: [`
    .logo {
      width: 250px;
      height: 50px;
      object-fit: contain;
      background-color: white;
    }

    .icon-container {
      width: 150px;
      height: 150px;
      background-color: white;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-bottom: var(--spacing-md);
      box-shadow: var(--shadow-md);
      transition: var(--transition-smooth);
    }

    .icon-container:hover {
      transform: scale(1.05);
      box-shadow: var(--shadow-lg);
    }

    .menu-icon {
      font-size: 3rem;
      color: var(--primary-color);
    }

    /* Mobile Responsive Styles */
    @media (max-width: 768px) {
      .logo {
        width: 200px;
        height: 40px;
      }

      .icon-container {
        width: 100px;
        height: 100px;
        margin-bottom: var(--spacing-sm);
      }

      .menu-icon {
        font-size: 2rem;
      }

      .menu-cards {
        grid-template-columns: repeat(2, 1fr) !important;
        gap: var(--spacing-sm) !important;
        padding: var(--spacing-sm) !important;
      }
    }

    @media (max-width: 480px) {
      .logo {
        width: 120px;
        height: 24px;
      }

      .icon-container {
        width: 80px;
        height: 80px;
        margin-bottom: var(--spacing-xs);
      }

      .menu-icon {
        font-size: 1.5rem;
      }

      .menu-cards {
        grid-template-columns: 1fr !important;
        gap: var(--spacing-xs) !important;
        padding: var(--spacing-xs) !important;
      }

      .language-switch {
        width: 35px !important;
        height: 35px !important;
        font-size: 0.75rem !important;
      }

      .menu-button {
        width: 35px !important;
        height: 35px !important;
      }

      .menu-button i {
        font-size: 1rem !important;
      }
    }
  `]
})
export class HeaderComponent implements OnInit, OnDestroy {
  navigationItems: NavigationItem[] = [];
  languages: LanguageOption[] = [];
  currentLanguage: string = 'ar';
  isMenuOpen: boolean = false;
  universityInfo: any;
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {}

  ngOnInit() {
    this.navigationItems = this.navigationService.getNavigationItems();
    this.languages = this.navigationService.getLanguages();
    this.universityInfo = this.navigationService.getUniversityInfo();
    
    this.subscriptions.add(
      this.navigationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
      })
    );
    
    this.subscriptions.add(
      this.navigationService.menuOpen$.subscribe(open => {
        this.isMenuOpen = open;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  toggleLanguage() {
    const newLanguage = this.currentLanguage === 'ar' ? 'en' : 'ar';
    this.navigationService.setCurrentLanguage(newLanguage);
  }

  toggleMenu() {
    if (this.isMenuOpen) {
      this.navigationService.closeMenu();
    } else {
      this.navigationService.openMenu();
    }
  }

  closeMenu() {
    this.navigationService.closeMenu();
  }

  closeMenuOverlay(event: Event) {
    if (event.target === event.currentTarget) {
      this.closeMenu();
    }
  }

  navigateAndCloseMenu(route: string) {
    this.router.navigate([route]);
    this.closeMenu();
  }

  getLocalizedText(textEn: string, textAr: string): string {
    return this.navigationService.getLocalizedText(textEn, textAr);
  }
}