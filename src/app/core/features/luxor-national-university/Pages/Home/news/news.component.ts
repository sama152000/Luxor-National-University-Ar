import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NewsService } from '../../../Services/news.service';
import { NewsSection } from '../../../model/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="news-paper" dir="rtl">
      <div class="container-custom">
        <h2 class="news-title">{{ newsSection.title }}</h2>

        <div class="news-layout">
          <!-- الخبر الرئيسي -->
          <article class="news-main hover-lift" *ngIf="featuredArticle">
            <img [src]="featuredArticle.image" [alt]="featuredArticle.title">
            <div class="news-content">
              <span class="news-category">{{ featuredArticle.category }}</span>
              <h3>{{ featuredArticle.title }}</h3>
              <!-- <span class="news-date">{{ featuredArticle.date }}</span> -->
              <!-- <p>{{ featuredArticle.excerpt }}</p> -->
              <a [href]="featuredArticle.link">اقرأ المزيد ←</a>
            </div>
          </article>

          <!-- الأخبار الجانبية -->
          <div class="news-side">
            <article 
              *ngFor="let article of sideArticles" 
              class="news-item hover-lift"
            >
              <img [src]="article.image" [alt]="article.title">
              <div>
                <span class="news-date">{{ article.date }}</span>
                <h4>{{ article.title }}</h4>
                <a [href]="article.link">عرض ←</a>
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
  newsSection!: NewsSection;
  featuredArticle!: any;
  sideArticles!: any[];

  constructor(private newsService: NewsService) {}

  ngOnInit() {
    this.newsSection = this.newsService.getNewsSection();
    this.featuredArticle = this.newsSection.articles.find(article => article.featured);
    this.sideArticles = this.newsSection.articles.filter(article => !article.featured);
  }
}
