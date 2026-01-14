import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FacultiesService } from '../../../Services/faculties.service';
import { NavigationService } from '../../../Services/navigation.service';
import { FacultiesSection, Faculty } from '../../../model/faculties.model';

@Component({
  selector: 'app-faculties-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="faculties-section" [style.background-image]="'url(' + facultiesSection.backgroundImage + ')'">
      <div class="section-overlay"></div>
      <div class="container-custom">
        <!-- Section Header -->
        <div class="section-header text-center mb-5">
          <h2 class="text-white slide-down">
            {{ getLocalizedText(facultiesSection.title, facultiesSection.titleAr) }}
          </h2>
          <p class="lead text-white slide-down animate-delay-1">
            {{ getLocalizedText(facultiesSection.subtitle, facultiesSection.subtitleAr) }}
          </p>
        </div>

        <!-- Faculties Slider -->
        <div class="faculties-slider-container">
          <div class="slider-wrapper">
            <button 
              class="slider-btn slider-btn-prev"
              (click)="previousSlide()"
              [disabled]="currentSlide === 0"
              [attr.aria-label]="getLocalizedText('Previous faculty', 'الكلية السابقة')"
            >
              <i class="pi pi-chevron-left" [class.pi-chevron-right]="isRTL" [class.pi-chevron-left]="!isRTL"></i>
            </button>

            <div class="slider-container" #sliderContainer>
              <div
                  class="slider-track"
                  #sliderTrack
                  [style.transform]="'translateX(' + translateX + '%)'"
                >
                <div 
                  *ngFor="let faculty of faculties; let i = index"
                  class="faculty-slide fade-in"
                  [style.animation-delay]="(i * 0.2) + 's'"
                  (click)="viewFaculty(faculty)"
                >
                  <div class="slide-content">
                    <div class="faculty-image-container">
                      <div class="image-frame">
                        <img 
                          [src]="faculty.image" 
                          [alt]="getLocalizedText(faculty.name, faculty.nameAr)"
                          class="faculty-image"
                        >
                      </div>
                    </div>
                    <div class="faculty-info">
                      <h3 class="faculty-name">
                        {{ getLocalizedText(faculty.name, faculty.nameAr) }}
                      </h3>
                      <!-- <p class="faculty-description">
                        {{ getLocalizedText(faculty.description, faculty.descriptionAr) }}
                      </p> -->
                      <!-- <div class="faculty-stats">
                        <div class="stat-item">
                          <span class="stat-number">{{ faculty.studentsCount }}</span>
                          <span class="stat-label">{{ getLocalizedText('Students', 'طالب') }}</span>
                        </div>
                        <div class="stat-item">
                          <span class="stat-number">{{ faculty.programsCount }}</span>
                          <span class="stat-label">{{ getLocalizedText('Programs', 'برنامج') }}</span>
                        </div>
                      </div> -->
                      <button class="btn btn-light hover-lift mt-3">
                        {{ getLocalizedText('Learn More', 'اعرف المزيد') }}
                        <i class="pi pi-arrow-left ms-2" [class.pi-arrow-left]="isRTL" [class.me-2]="isRTL" [class.ms-2]="!isRTL"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <button 
              class="slider-btn slider-btn-next"
              (click)="nextSlide()"
              [disabled]="currentSlide >= maxSlides"
              [attr.aria-label]="getLocalizedText('Next faculty', 'الكلية التالية')"
            >
              <i class="pi pi-chevron-right" [class.pi-chevron-left]="isRTL" [class.pi-chevron-right]="!isRTL"></i>
            </button>
          </div>

          <!-- Slider Indicators -->
          <div class="slider-indicators">
            <button 
              *ngFor="let indicator of indicators; let i = index"
              class="indicator"
              [class.active]="i === currentSlide"
              (click)="goToSlide(i)"
              [attr.aria-label]="getLocalizedText('Go to slide', 'انتقل إلى الشريحة') + ' ' + (i + 1)"
            ></button>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faculties-section {
      background-size: cover;
      background-position: center;
      background-attachment: fixed;
      position: relative;
      min-height: 600px;
      display: flex;
      align-items: center;
    }

    .section-overlay {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(135deg, 
        rgba(56, 130, 147, 0.51), 
        rgba(47, 110, 117, 0.56)
      );
      z-index: 1;
    }

    .container-custom {
      position: relative;
      z-index: 2;
    }

    .section-header h2 {
      opacity: 0;
      font-size: clamp(2rem, 4vw, 2.5rem);
      margin-bottom: var(--spacing-sm);
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.3);
    }

    .section-header p {
      opacity: 0;
      font-size: 1.125rem;
      text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
    }

    .faculties-slider-container {
      position: relative;
    }

    .slider-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    [dir="rtl"] .slider-wrapper {
      flex-direction: row-reverse;
    }

    .slider-container {
      flex: 1;
      overflow: hidden;
      border-radius: var(--radius-xl);
    }

    .slider-track {
      display: flex;
      transition: transform 0.6s ease;
      will-change: transform;
    }

    .faculty-slide {
      flex: 0 0 100%;
      opacity: 1;
    }

    .slide-content {
      display: flex;
      align-items: center;
      gap: var(--spacing-xxxl);
      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(10px);
      border-radius: var(--radius-xl);
      padding: var(--spacing-xxxl);
      box-shadow: var(--shadow-xl);
      cursor: pointer;
      transition: var(--transition-smooth);
    }

    [dir="rtl"] .slide-content {
      flex-direction: row-reverse;
    }

    .slide-content:hover {
      transform: translateY(-4px);
      box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
      background: rgba(255, 255, 255, 1);
    }

    .faculty-image-container {
      flex: 0 0 600px;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .image-frame {
      position: relative;
      width: 500px;
      height: 400px;
      overflow: hidden;
      box-shadow: var(--shadow-lg);
      transition: var(--transition-smooth);
    }

    .slide-content:hover .image-frame {
      transform: scale(1.05);
      box-shadow: var(--shadow-xl);
    }

    .faculty-image {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transition: var(--transition-smooth);
    }

    .slide-content:hover .faculty-image {
      transform: scale(1.1);
    }

    .faculty-info {
      flex: 1;
      text-align: left;
    }

    [dir="rtl"] .faculty-info {
      text-align: right;
    }

    .faculty-name {
      font-size: clamp(1.5rem, 3vw, 2rem);
      font-weight: 700;
      color: var(--primary-color);
      margin-bottom: var(--spacing-sm);
      line-height: 1.2;
    }

    .faculty-description {
      font-size: 1.125rem;
      color: var(--medium-gray);
      margin-bottom: var(--spacing-lg);
      line-height: 1.5;
    }

    .faculty-stats {
      display: flex;
      gap: var(--spacing-xl);
      margin-bottom: var(--spacing-lg);
    }

    [dir="rtl"] .faculty-stats {
      flex-direction: row-reverse;
    }

    .stat-item {
      text-align: center;
    }

    .stat-number {
      display: block;
      font-size: 2rem;
      font-weight: 700;
      color: var(--primary-color);
      line-height: 1;
    }

    .stat-label {
      display: block;
      font-size: 0.875rem;
      color: var(--medium-gray);
      text-transform: uppercase;
      letter-spacing: 0.5px;
      margin-top: var(--spacing-xs);
    }

    .slider-btn {
      width: 60px;
      height: 60px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.9);
      border: 2px solid rgba(56, 131, 147, 0.3);
      color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: var(--transition-smooth);
      box-shadow: var(--shadow-md);
      backdrop-filter: blur(10px);
    }

    .slider-btn:hover:not(:disabled) {
      background: var(--primary-color);
      color: var(--white);
      transform: scale(1.1);
      border-color: var(--primary-color);
    }

    .slider-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .slider-btn i {
      font-size: 1.25rem;
    }

    .slider-indicators {
      display: flex;
      justify-content: center;
      gap: var(--spacing-sm);
      margin-top: var(--spacing-xl);
    }

    .indicator {
      width: 16px;
      height: 16px;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.4);
      border: 2px solid rgba(255, 255, 255, 0.6);
      cursor: pointer;
      transition: var(--transition-fast);
    }

    .indicator.active {
      background: var(--white);
      border-color: var(--white);
      transform: scale(1.2);
    }

    @media (max-width: 768px) {
      .faculties-section {
        background-attachment: scroll;
        min-height: auto;
      }

      .slide-content {
        flex-direction: column;
        text-align: center;
        gap: var(--spacing-lg);
        padding: var(--spacing-lg);
      }

      .faculty-image-container {
        flex: none;
      }

      .image-frame {
        width: 200px;
        height: 200px;
      }

      .faculty-info {
        text-align: center !important;
      }

      .faculty-stats {
        justify-content: center;
        gap: var(--spacing-lg);
      }

      .slider-btn {
        width: 50px;
        height: 50px;
      }

      .slider-btn i {
        font-size: 1rem;
      }
    }

    @media (max-width: 480px) {
      .slide-content {
        padding: var(--spacing-md);
      }

      .image-frame {
        width: 150px;
        height: 150px;
      }

      .faculty-name {
        font-size: 1.5rem;
      }

      .faculty-description {
        font-size: 1rem;
      }

      .stat-number {
        font-size: 1.5rem;
      }
    }
  `]
})
export class FacultiesSectionComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('sliderContainer', { static: false }) sliderContainer!: ElementRef;
  @ViewChild('sliderTrack', { static: false }) sliderTrack!: ElementRef;

  facultiesSection: FacultiesSection;
  faculties: Faculty[] = [];
  currentLanguage: string = 'ar';
  isRTL: boolean = true;
  
  currentSlide: number = 0;
  maxSlides: number = 0;
  translateX: number = 0;
  indicators: number[] = [];
  
  private subscriptions: Subscription = new Subscription();
  private autoPlayInterval?: number;

  constructor(
    private facultiesService: FacultiesService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.facultiesSection = this.facultiesService.getFacultiesSection();
    this.faculties = this.facultiesService.getAllFaculties();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.navigationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
        this.isRTL = lang === 'ar';
      })
    );

    this.maxSlides = this.faculties.length - 1;
    this.indicators = Array.from({ length: this.faculties.length }, (_, i) => i);
    
    // Start auto-play
    this.startAutoPlay();
  }

  ngAfterViewInit() {
    // Initial setup complete
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    this.stopAutoPlay();
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides) {
      this.currentSlide++;
    } else {
      this.currentSlide = 0; // Loop back to first slide
    }
    this.updateTransform();
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
    } else {
      this.currentSlide = this.maxSlides; // Loop to last slide
    }
    this.updateTransform();
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateTransform();
    this.resetAutoPlay();
  }

  private updateTransform() {
    if (this.isRTL) {
      this.translateX = this.currentSlide * 100;
    } else {
      this.translateX = -(this.currentSlide * 100);
    }
  }

  private startAutoPlay() {
    this.autoPlayInterval = window.setInterval(() => {
      this.nextSlide();
    }, 5000); // Change slide every 5 seconds
  }

  private stopAutoPlay() {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
    }
  }

  private resetAutoPlay() {
    this.stopAutoPlay();
    this.startAutoPlay();
  }

  viewFaculty(faculty: Faculty) {
    // Navigate to faculty detail page (to be implemented)
    console.log('View faculty:', faculty.slug);
    // this.router.navigate(['/faculties', faculty.slug]);
  }

  getLocalizedText(textEn: string, textAr: string): string {
    return this.navigationService.getLocalizedText(textEn, textAr);
  }
}