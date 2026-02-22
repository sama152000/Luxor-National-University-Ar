import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NewsService } from '../../Services/news.service';
import { NewsItem } from '../../model/news.model';

@Component({
  selector: 'app-news',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './news.component.html',
  styleUrls: ['./news.component.css']
})
export class NewsComponent implements OnInit {
  allNews: NewsItem[] = [];
  filteredNews: NewsItem[] = [];
  paginatedNews: NewsItem[] = [];
  
  currentCategory = 'الكل';
  currentPage = 1;
  itemsPerPage = 6;
  totalPages = 1;
  
  isLoading = false;

  categories = [
    { id: 'الكل', name: 'الكل' },
    { id: 'أخبار', name: 'أخبار' },
    { id: 'أنشطة', name: 'أنشطة' },
    { id: 'فعاليات', name: 'فعاليات' }
  ];

  constructor(
    private newsService: NewsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadNews();
  }

  loadNews(): void {
    this.isLoading = true;
    this.newsService.getAllNews().subscribe(news => {
      this.allNews = news.sort((a, b) => b.date.getTime() - a.date.getTime());
      this.filterByCategory(this.currentCategory);
      this.isLoading = false;
    });
  }

  setActiveCategory(categoryId: string): void {
    this.currentCategory = categoryId;
    this.currentPage = 1;
    this.filterByCategory(categoryId);
  }

  filterByCategory(category: string): void {
    if (category === 'الكل') {
      this.filteredNews = [...this.allNews];
    } else {
      this.filteredNews = this.allNews.filter(news => news.category === category);
    }
    this.updatePagination();
  }

  updatePagination(): void {
    this.totalPages = Math.ceil(this.filteredNews.length / this.itemsPerPage);
    this.updatePaginatedNews();
  }

  updatePaginatedNews(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.paginatedNews = this.filteredNews.slice(startIndex, endIndex);
  }

  goToPage(page: number): void {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.updatePaginatedNews();
    }
  }

  previousPage(): void {
    if (this.currentPage > 1) {
      this.goToPage(this.currentPage - 1);
    }
  }

  nextPage(): void {
    if (this.currentPage < this.totalPages) {
      this.goToPage(this.currentPage + 1);
    }
  }

  getPageNumbers(): number[] {
    const pages: number[] = [];
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);
    
    for (let i = startPage; i <= endPage; i++) {
      pages.push(i);
    }
    return pages;
  }

  viewNewsDetails(newsId: number): void {
    this.router.navigate(['/news', newsId]);
  }

  formatDate(date: Date): string {
    return new Intl.DateTimeFormat('ar-SA', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    }).format(date);
  }

  getEndIndex(): number {
    return Math.min(this.currentPage * this.itemsPerPage, this.filteredNews.length);
  }

  isActiveCategory(categoryId: string): boolean {
    return this.currentCategory === categoryId;
  }
}