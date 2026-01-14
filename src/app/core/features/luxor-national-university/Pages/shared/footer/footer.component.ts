import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../../Services/navigation.service';
import { NavigationItem, UniversityInfo } from '../../../model/navigation.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="footer">
      <div class="container-custom">
        <div class="row">
          <!-- University Info -->
          <div class="col-lg-4 mb-4 mb-lg-0 ">
            <div class="d-flex align-items-center mb-3">
              <img 
                [src]="universityInfo.logo" 
                [alt]="getLocalizedText(universityInfo.name, universityInfo.nameAr)"
                class="footer-logo me-3"
                width="300"
                height="60"
              >
              <div>
                <!-- <h5 class="mb-1">{{ getLocalizedText(universityInfo.name, universityInfo.nameAr) }}</h5> -->
                <!-- <small class="text-light opacity-75">{{ getLocalizedText('Est.', 'تأسست') }} {{ universityInfo.establishedYear }}</small> -->
              </div>
            </div>
            <p class="text-light opacity-75">
              {{ getLocalizedText(universityInfo.description, universityInfo.descriptionAr) }}
            </p>
          </div>

          <!-- Quick Links -->
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0">
            <h5 class="mb-3">{{ getLocalizedText('Quick Links', 'روابط سريعة') }}</h5>
            <ul class="list-unstyled ">
              <li *ngFor="let item of navigationItems" class="mb-2 ">
                <a (click)="navigate(item.route)" class="text-decoration-none cursor-pointer">
                  <i [class]="item.icon" class="me-2"></i>
                  {{ getLocalizedText(item.title, item.titleAr) }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Contact Info -->
          <div class="col-lg-3 col-md-6 mb-4 mb-lg-0 ">
            <h5 class="mb-3">{{ getLocalizedText('Contact Info', 'معلومات التواصل') }}</h5>
            <ul class="list-unstyled">
              <li class="mb-2 d-flex align-items-center gap-2">
                <i class="pi pi-map-marker me-2"></i>
                <span class="text-light opacity-75">
                  {{ getLocalizedText(universityInfo.contact.address, universityInfo.contact.addressAr) }}
                </span>
              </li>
              <li class="mb-2 d-flex align-items-center gap-2">
                <i class="pi pi-phone me-2"></i>
                <a [href]="'tel:' + universityInfo.contact.phone" class="text-light opacity-75 text-decoration-none">
                  {{ universityInfo.contact.phone }}
                </a>
              </li>
              <li class="mb-2 d-flex align-items-center gap-2">
                <i class="pi pi-envelope me-2"></i>
                <a [href]="'mailto:' + universityInfo.contact.email" class="text-light opacity-75 text-decoration-none">
                  {{ universityInfo.contact.email }}
                </a>
              </li>
            </ul>
          </div>

          <!-- Social Media -->
          <div class="col-lg-2">
            <h5 class="mb-3">{{ getLocalizedText('Follow Us', 'تابعونا') }}</h5>
            <div class="social-links">
              <a 
                *ngIf="universityInfo.socialMedia.facebook"
                [href]="universityInfo.socialMedia.facebook" 
                target="_blank" 
                class="social-link me-3"
                aria-label="Facebook"
              >
                <i class="pi pi-facebook"></i>
              </a>
              <a 
                *ngIf="universityInfo.socialMedia.twitter"
                [href]="universityInfo.socialMedia.twitter" 
                target="_blank" 
                class="social-link me-3"
                aria-label="Twitter"
              >
                <i class="pi pi-twitter"></i>
              </a>
              <a 
                *ngIf="universityInfo.socialMedia.instagram"
                [href]="universityInfo.socialMedia.instagram" 
                target="_blank" 
                class="social-link me-3"
                aria-label="Instagram"
              >
                <i class="pi pi-instagram"></i>
              </a>
              <a 
                *ngIf="universityInfo.socialMedia.linkedin"
                [href]="universityInfo.socialMedia.linkedin" 
                target="_blank" 
                class="social-link"
                aria-label="LinkedIn"
              >
                <i class="pi pi-linkedin"></i>
              </a>
            </div>
          </div>
        </div>

        <hr class="my-4 opacity-25">

        <!-- Copyright -->
        <div class="row">
          <div class="col-12 text-center">
            <p class="mb-0 text-light opacity-75">
              © {{ currentYear }} {{ getLocalizedText(universityInfo.name, universityInfo.nameAr) }}. 
              {{ getLocalizedText('All rights reserved.', 'جميع الحقوق محفوظة.') }}
            </p>
          </div>
        </div>
      </div>
    </footer>
  `,
  styles: [`


  
    .footer-logo {
      object-fit: cover;
            background-color: white;

    }

    .social-link {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 40px;
      height: 40px;
      background: rgba(255, 255, 255, 0.1);
      color: rgba(255, 255, 255, 0.8);
      border-radius: 50%;
      text-decoration: none;
      transition: all 0.3s ease;
      border: 1px solid rgba(255, 255, 255, 0.2);
    }

    .social-link:hover {
      background: rgba(255, 255, 255, 0.2);
      color: white;
      transform: translateY(-2px);
      border-color: rgba(255, 255, 255, 0.4);
    }

    .cursor-pointer {
      cursor: pointer;
    }

    .cursor-pointer:hover {
      text-decoration: underline !important;
    }

    @media (max-width: 768px) {
      .footer {
        text-align: center;
      }
      
      .footer .row {
        flex-direction: column;
        align-items: center;
      }
      
      .footer .col-lg-4,
      .footer .col-lg-3,
      .footer .col-lg-2,
      .footer .col-md-6 {
        text-align: center;
        margin-bottom: 2rem;
      }
      
      .footer .d-flex.align-items-center {
        justify-content: center;
        flex-direction: column;
      }
      
      .footer-logo {
        margin-right: 0 !important;
        margin-bottom: 1rem;
      }
      
      .social-links {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
      }
      
      .social-link {
        margin: 0 0.5rem 0.5rem 0 !important;
      }
      
      .list-unstyled {
        padding-left: 0;
      }
      
      .list-unstyled li {
        display: flex;
        justify-content: center;
        align-items: center;
      }
    }
  `]
})
export class FooterComponent implements OnInit, OnDestroy {
  navigationItems: NavigationItem[] = [];
  universityInfo: UniversityInfo;
  currentLanguage: string = 'ar';
  currentYear: number = new Date().getFullYear();
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.navigationItems = this.navigationService.getNavigationItems();
    this.universityInfo = this.navigationService.getUniversityInfo();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.navigationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  navigate(route: string) {
    this.router.navigate([route]);
  }

  getLocalizedText(textEn: string, textAr: string): string {
    return this.navigationService.getLocalizedText(textEn, textAr);
  }
}