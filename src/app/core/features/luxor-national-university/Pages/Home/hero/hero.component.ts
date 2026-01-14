import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../../Services/navigation.service';
import { HeroContent } from '../../../model/home.model';
import { HomeService } from '../../../Services/home.service';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="hero">
      <div class="container-custom">
        <div class="row align-items-center">
          <!-- Content -->
          <div class="col-lg-6" [class.order-2]="isRTL" [class.order-lg-1]="isRTL">
            <div class="hero-content">
              <h1 class="text-white mb-4 slide-up">
                {{ heroContent.titleAr }}
              </h1>
              <p class="lead text-white mb-4 slide-up animate-delay-1">
                {{ heroContent.subtitleAr }}
              </p>
              <button
                class="btn btn-light hover-lift slide-up animate-delay-2 ms-2"
                (click)="navigateToContact()"
              >
                {{ heroContent.ctaTextAr }}
                <!-- <i class="pi pi-arrow-left mb-2 ms-2"></i> -->
              </button>
            </div>
          </div>

          <!-- Images -->
          <div class="col-lg-6" [class.order-1]="isRTL" [class.order-lg-2]="isRTL">
            <div class="hero-images">
              <div class="image-stack">
                <img 
                  *ngFor="let image of heroContent.images; let i = index"
                  [src]="image"
                  [alt]="'University Image ' + (i + 1)"
                  class="hero-image"
                  [style.animation-delay]="(i * 0.3 + 0.5) + 's'"
                >
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .hero-images {
      position: relative;
      height: 600px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-stack {
      position: relative;
      width: 100%;
      max-width: 800px;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .hero-image {
      position: absolute;
      width: 250px;
      height: 300px;
      object-fit: cover;
      border-radius: 16px;
      box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);
      opacity: 1;
      transition: transform 0.3s ease;
    }

    .hero-image:hover {
      transform: translateY(-8px) scale(1.02);
    }

    .hero-image:nth-child(1) {
      top: 0%;
      left: 5%;
      transform: rotate(10deg) translateY(-10px);
    }

    .hero-image:nth-child(2) {
      top: 0%;
      right: 20%;
      transform: rotate(15deg) translateX(10px);
    }

    .hero-image:nth-child(3) {
      top: 40%;
      left: 10%;
      transform: rotate(12deg) translateX(-10px);
    }

    .hero-image:nth-child(4) {
      top: 40%;
      right: 15%;
      transform: rotate(12deg) translateY(10px);
    }

    .hero-content h1 {
      opacity: 0;
    }

    .hero-content p {
      opacity: 0;
    }

    .hero-content button {
      opacity: 0;
    }

    @media (max-width: 768px) {
      .hero {
        padding: 2rem 0;
        text-align: center;
      }
       .hero-content button {
      margin-bottom:7rem;
    }
      .hero-images {
        height: 300px;
        margin-bottom: 6rem;
      }
      
      .hero-image {
        width: 180px;
        height: 220px;
      }
      
      .hero-image:nth-child(1) {
        left: 10%;
        bottom: 50%;
        transform: rotate(-5deg);
      }
      
      .hero-image:nth-child(2) {
        right: 5%;
        transform: rotate(8deg);
      }
      
      .hero-image:nth-child(3) {
        bottom: 10%;
        left: 15%;
        transform: rotate(-10deg);
      }
      
      .hero-image:nth-child(4) {
        bottom: 15%;
        right: 10%;
        transform: rotate(5deg);
      }
      
      .hero-image:nth-child(5) {
        top: 40%;
        left: 5%;
        transform: rotate(3deg);
      }
    }
  `]
})
export class HeroComponent implements OnInit, OnDestroy {
  heroContent: HeroContent;
  currentLanguage: string = 'ar';
  isRTL: boolean = true;
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private homeService: HomeService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.heroContent = this.homeService.getHeroContent();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.navigationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
        this.isRTL = lang === 'ar';
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  navigateToContact() {
    this.router.navigate([this.heroContent.ctaLink]);
  }

  getLocalizedText(textEn: string, textAr: string): string {
    return this.navigationService.getLocalizedText(textEn, textAr);
  }
}
