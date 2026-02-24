import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { NewsService } from '../../../Services/news.service';
import { NewsItem } from '../../../model/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <section class="news-paper" dir="rtl">
      <div class="container-custom">
        <h2 class="news-title">أحدث الأخبار</h2>

        <div class="news-layout">
          <!-- الخبر الرئيسي -->
          <article class="news-main hover-lift" *ngIf="featuredArticle">
            <img [src]="featuredArticle.mainImage" [alt]="featuredArticle.title">
            <div class="news-content">
              <span class="news-category">{{ featuredArticle.category }}</span>
              <h3>{{ featuredArticle.title }}</h3>
              <a [routerLink]="['/news', featuredArticle.id]">اقرأ المزيد ←</a>
            </div>
          </article>

          <!-- الأخبار الجانبية -->
          <div class="news-side">
            <article 
              *ngFor="let article of sideArticles" 
              class="news-item hover-lift"
              [routerLink]="['/news', article.id]"
            >
              <img [src]="article.mainImage" [alt]="article.title">
              <div>
                <span class="news-date">{{ formatDate(article.date) }}</span>
                <h4>{{ article.title }}</h4>
                <a [routerLink]="['/news', article.id]">عرض ←</a>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './news.component.css'
})
export class NewsComponent implements OnInit {
  featuredArticle!: NewsItem;
  sideArticles: NewsItem[] = [];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsService.getHomeNews().subscribe(homeNews => {
      this.featuredArticle = homeNews.featured;
      this.sideArticles = homeNews.side;
    });
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }
}
