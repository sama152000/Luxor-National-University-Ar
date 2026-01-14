import { Component, OnInit, OnDestroy, ViewChild, ElementRef, AfterViewInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { NewsService } from '../../../Services/news.service';
import { NavigationService } from '../../../Services/navigation.service';
import { NewsSection, NewsArticle } from '../../../model/news.model';

@Component({
  selector: 'app-news-section',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="news-section">
      <div class="container-custom">
        <!-- Section Header -->
        <div class="section-header text-center mb-5">
          <h2 class="text-primary slide-up">
            {{ getLocalizedText(newsSection.title, newsSection.titleAr) }}
          </h2>
          <p class="lead text-gray slide-up animate-delay-1">
            {{ getLocalizedText(newsSection.subtitle, newsSection.subtitleAr) }}
          </p>
        </div>

        <!-- News Carousel -->
        <div class="news-carousel-container">
          <div class="carousel-wrapper">
            <button 
              class="carousel-btn carousel-btn-prev"
              (click)="previousSlide()"
              [disabled]="isPreviousDisabled"
              [attr.aria-label]="getLocalizedText('Previous news', 'الأخبار السابقة')"
            >
              <i class="pi pi-chevron-left" [class.pi-chevron-right]="isRTL" [class.pi-chevron-left]="!isRTL"></i>
            </button>

            <div class="carousel-container" #carouselContainer>
              <div 
                class="carousel-track"
                #carouselTrack
                [style.transform]="'translateX(' + translateX + 'px)'"
              >
                <div 
                  *ngFor="let article of articles; let i = index"
                  class="news-card slide-up"
                  [style.animation-delay]="(i * 0.1) + 's'"
                  (click)="viewArticle(article)"
                >
                  <div class="card-image">
                    <img [src]="article.image" [alt]="getLocalizedText(article.title, article.titleAr)">
                    <div class="card-overlay">
                      <span class="category-badge">
                        {{ getLocalizedText(article.category, article.categoryAr) }}
                      </span>
                    </div>
                  </div>
                  <div class="card-content">
                    <div class="card-meta">
                      <span class="publish-date">
                        {{ formatDate(article.publishDate) }}
                      </span>
                      <span class="author">
                        {{ getLocalizedText(article.author, article.authorAr) }}
                      </span>
                    </div>
                    <h5 class="card-title">
                      {{ getLocalizedText(article.title, article.titleAr) }}
                    </h5>
                    <p class="card-excerpt">
                      {{ getLocalizedText(article.excerpt, article.excerptAr) }}
                    </p>
                    <button class="btn btn-primary btn-sm read-more-btn">
                      {{ getLocalizedText('Read More', 'اقرأ المزيد') }}
                      <i class="pi pi-arrow-left ms-2" [class.pi-arrow-left]="isRTL" [class.me-2]="isRTL" [class.ms-2]="!isRTL"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <button 
              class="carousel-btn carousel-btn-next"
              (click)="nextSlide()"
              [disabled]="isNextDisabled"
              [attr.aria-label]="getLocalizedText('Next news', 'الأخبار التالية')"
            >
              <i class="pi pi-chevron-right" [class.pi-chevron-left]="isRTL" [class.pi-chevron-right]="!isRTL"></i>
            </button>
          </div>

          <!-- Carousel Indicators -->
          <div class="carousel-indicators">
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
    .news-section {
      background: var(--light-gray);
      position: relative;
      overflow: hidden;
    }

    .section-header h2 {
      opacity: 0;
      font-size: clamp(2rem, 4vw, 2.5rem);
      margin-bottom: var(--spacing-sm);
    }

    .section-header p {
      opacity: 0;
      font-size: 1.125rem;
    }

    .news-carousel-container {
      position: relative;
    }

    .carousel-wrapper {
      position: relative;
      display: flex;
      align-items: center;
      gap: var(--spacing-md);
    }

    [dir="rtl"] .carousel-wrapper {
      flex-direction: row-reverse;
    }

    .carousel-container {
      flex: 1;
      overflow: hidden;
      border-radius: var(--radius-lg);
    }

    .carousel-track {
      display: flex;
      gap: var(--spacing-lg);
      transition: transform 0.5s ease;
      will-change: transform;
    }

    .news-card {
      flex: 0 0 350px;
      background: var(--white);
      border-radius: var(--radius-lg);
      overflow: hidden;
      box-shadow: var(--shadow-md);
      transition: var(--transition-smooth);
      cursor: pointer;
      opacity: 0;
      transform: translateY(30px);
    }

    .news-card:hover {
      transform: translateY(-8px);
      box-shadow: var(--shadow-xl);
    }

    .card-image {
      position: relative;
      height: 200px;
      overflow: hidden;
    }

    .card-image img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: var(--transition-smooth);
    }

    .news-card:hover .card-image img {
      transform: scale(1.05);
    }

    .card-overlay {
      position: absolute;
      top: var(--spacing-sm);
      right: var(--spacing-sm);
    }

    .category-badge {
      background: var(--primary-color);
      color: var(--white);
      padding: var(--spacing-xs) var(--spacing-sm);
      border-radius: var(--radius-sm);
      font-size: 0.75rem;
      font-weight: 600;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }

    .card-content {
      padding: var(--spacing-lg);
      text-align: left;
    }

    [dir="rtl"] .card-content {
      text-align: right;
    }

    .card-meta {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: var(--spacing-sm);
      font-size: 0.875rem;
      color: var(--medium-gray);
    }

    [dir="rtl"] .card-meta {
      flex-direction: row-reverse;
    }

    .publish-date {
      font-weight: 500;
    }

    .author {
      font-style: italic;
    }

    .card-title {
      font-size: 1.125rem;
      font-weight: 600;
      line-height: 1.3;
      margin-bottom: var(--spacing-sm);
      color: var(--text-dark);
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .card-excerpt {
      font-size: 0.95rem;
      line-height: 1.5;
      color: var(--medium-gray);
      margin-bottom: var(--spacing-md);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
    }

    .read-more-btn {
      font-size: 0.875rem;
      padding: var(--spacing-xs) var(--spacing-md);
    }

    .carousel-btn {
      width: 50px;
      height: 50px;
      border-radius: 50%;
      background: var(--white);
      border: 2px solid var(--primary-color);
      color: var(--primary-color);
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
      transition: var(--transition-smooth);
      box-shadow: var(--shadow-sm);
    }

    .carousel-btn:hover:not(:disabled) {
      background: var(--primary-color);
      color: var(--white);
      transform: scale(1.1);
    }

    .carousel-btn:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    .carousel-indicators {
      display: flex;
      justify-content: center;
      gap: var(--spacing-xs);
      margin-top: var(--spacing-lg);
    }

    .indicator {
      width: 12px;
      height: 12px;
      border-radius: 50%;
      background: rgba(56, 131, 147, 0.3);
      border: none;
      cursor: pointer;
      transition: var(--transition-fast);
    }

    .indicator.active {
      background: var(--primary-color);
      transform: scale(1.2);
    }

    /* RTL Adjustments */
    [dir="rtl"] .card-overlay {
      right: auto;
      left: var(--spacing-sm);
    }

    @media (max-width: 768px) {
      .carousel-wrapper {
        flex-direction: column;
        gap: var(--spacing-sm);
      }

      .carousel-btn {
        width: 40px;
        height: 40px;
      }

      .news-card {
        flex: 0 0 280px;
      }

      .card-content {
        padding: var(--spacing-md);
      }

      .card-title {
        font-size: 1rem;
      }

      .card-excerpt {
        font-size: 0.875rem;
        -webkit-line-clamp: 2;
      }
    }

    @media (max-width: 480px) {
      .news-card {
        flex: 0 0 250px;
      }

      .carousel-track {
        gap: var(--spacing-md);
      }
    }
  `]
})
export class NewsSectionComponent implements OnInit, OnDestroy, AfterViewInit {
  @ViewChild('carouselContainer', { static: false }) carouselContainer!: ElementRef;
  @ViewChild('carouselTrack', { static: false }) carouselTrack!: ElementRef;

  newsSection: NewsSection;
  articles: NewsArticle[] = [];
  currentLanguage: string = 'ar';
  isRTL: boolean = true;
  
  currentSlide: number = 0;
  maxSlides: number = 0;
  translateX: number = 0;
  indicators: number[] = [];
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private newsService: NewsService,
    private navigationService: NavigationService,
    private router: Router
  ) {
    this.newsSection = this.newsService.getNewsSection();
    this.articles = this.newsService.getRecentNews();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.navigationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
        this.isRTL = lang === 'ar';
      })
    );

    // Set initial maxSlides based on typical desktop layout (assuming 3 visible cards)
    this.maxSlides = Math.max(0, this.articles.length - 3);
    this.indicators = Array.from({ length: this.maxSlides + 1 }, (_, i) => i);
  }

  ngAfterViewInit() {
    this.calculateSlides();
    window.addEventListener('resize', () => this.calculateSlides());
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
    window.removeEventListener('resize', () => this.calculateSlides());
  }

  calculateSlides() {
    if (!this.carouselContainer) return;

    const containerWidth = this.carouselContainer.nativeElement.offsetWidth;
    const cardWidth = 350; // Base card width
    const gap = 32; // Gap between cards
    const visibleCards = Math.floor(containerWidth / (cardWidth + gap));
    
    this.maxSlides = Math.max(0, this.articles.length - visibleCards);
    this.indicators = Array.from({ length: this.maxSlides + 1 }, (_, i) => i);
    
    // Reset slide if current slide is beyond max
    if (this.currentSlide > this.maxSlides) {
      this.currentSlide = this.maxSlides;
      this.updateTransform();
    }
  }

  nextSlide() {
    if (this.currentSlide < this.maxSlides) {
      this.currentSlide++;
      this.updateTransform();
    }
  }

  previousSlide() {
    if (this.currentSlide > 0) {
      this.currentSlide--;
      this.updateTransform();
    }
  }

  goToSlide(index: number) {
    this.currentSlide = index;
    this.updateTransform();
  }

  private updateTransform() {
    const cardWidth = 350;
    const gap = 32;
    const slideDistance = cardWidth + gap;
    if (this.isRTL) {
      this.translateX = this.currentSlide * slideDistance;
    } else {
      this.translateX = -(this.currentSlide * slideDistance);
    }
  }

  viewArticle(article: NewsArticle) {
    // Navigate to article detail page (to be implemented)
    console.log('View article:', article.slug);
    // this.router.navigate(['/news', article.slug]);
  }

  formatDate(date: Date): string {
    if (this.currentLanguage === 'ar') {
      return date.toLocaleDateString('ar-EG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      });
    }
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  }

  getLocalizedText(textEn: string, textAr: string): string {
    return this.navigationService.getLocalizedText(textEn, textAr);
  }

  get isPreviousDisabled(): boolean {
    return this.currentSlide === 0;
  }

  get isNextDisabled(): boolean {
    return this.currentSlide >= this.maxSlides;
  }
}