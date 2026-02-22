import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { NewsItem } from '../../../model/news.model';

@Component({
  selector: 'app-news-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news-details.component.html',
  styleUrls: ['./news-details.component.css']
})
export class NewsDetailsComponent implements OnInit {
  news: NewsItem | null = null;
  relatedNews: NewsItem[] = [];
  previousNews: NewsItem | null = null;
  nextNews: NewsItem | null = null;
  
  currentImageIndex = 0;
  isLoading = true;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private newsService: NewsService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      if (id) {
        this.loadNewsDetails(id);
      }
    });
  }

  loadNewsDetails(id: number): void {
    this.isLoading = true;
    
    // Load main news
    this.newsService.getNewsById(id).subscribe(news => {
      this.news = news || null;
      
      if (this.news) {
        // Load related data
        this.loadRelatedNews(id);
        this.loadNavigationNews(id);
      }
      
      this.isLoading = false;
    });
  }

  loadRelatedNews(newsId: number): void {
    this.newsService.getRelatedNews(newsId, 4).subscribe(related => {
      this.relatedNews = related;
    });
  }

  loadNavigationNews(newsId: number): void {
    this.newsService.getPreviousNews(newsId).subscribe(prev => {
      this.previousNews = prev;
    });
    
    this.newsService.getNextNews(newsId).subscribe(next => {
      this.nextNews = next;
    });
  }

  // Image Slider Methods
  nextImage(): void {
    if (this.news && this.news.images.length > 1) {
      this.currentImageIndex = (this.currentImageIndex + 1) % this.news.images.length;
    }
  }

  previousImage(): void {
    if (this.news && this.news.images.length > 1) {
      this.currentImageIndex = this.currentImageIndex === 0 
        ? this.news.images.length - 1 
        : this.currentImageIndex - 1;
    }
  }

  goToImage(index: number): void {
    this.currentImageIndex = index;
  }

  // Navigation Methods
  goToPreviousNews(): void {
    if (this.previousNews) {
      this.router.navigate(['/news', this.previousNews.id]);
    }
  }

  goToNextNews(): void {
    if (this.nextNews) {
      this.router.navigate(['/news', this.nextNews.id]);
    }
  }

  viewRelatedNews(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }

  goBack(): void {
    this.router.navigate(['/news']);
  }

  // Utility Methods
  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getCurrentImage(): string {
    return this.news?.images[this.currentImageIndex] || this.news?.mainImage || '';
  }

  hasMultipleImages(): boolean {
    return (this.news?.images.length || 0) > 1;
  }
}