import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsSection,NewsItem, NewsCategory } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {}

  // getNewsSection(): NewsSection {
  //   return {
  //     id: '1',
  //     title: 'أحدث الأخبار',
  //     articles: [
  //       {
  //         id: '1',
  //         title: 'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
  //         excerpt: 'افتتحت جامعة الأقصر الوطنية مركز أبحاث متقدم جديد لدعم الابتكار والاستدامة والتميز العلمي عبر تخصصات متعددة.',
  //         image: './assets/pic2.jpg',
  //         category: 'عاجل',
  //         date: '15 أكتوبر 2025',
  //         link: '/news/research-center-launch',
  //         featured: true
  //       },
  //       {
  //         id: '2',
  //         title: 'المؤتمر الدولي حول تغير المناخ',
  //         image: './assets/pic1.jpg',
  //         category: 'فعاليات',
  //         date: '10 أكتوبر 2025',
  //         link: '/news/climate-conference',
  //         featured: false
  //       },
  //       {
  //         id: '3',
  //         title: 'طلاب يفوزون بجائزة الابتكار الوطنية',
  //         image: './assets/pic3.jpg',
  //         category: 'إنجاز',
  //         date: '28 سبتمبر 2025',
  //         link: '/news/innovation-award',
  //         featured: false
  //       },
  //       {
  //         id: '4',
  //         title: 'كلية العلوم تحصل على اعتماد دولي',
  //         image: './assets/pic4.jpg',
  //         category: 'أكاديمي',
  //         date: '18 سبتمبر 2025',
  //         link: '/news/science-accreditation',
  //         featured: false
  //       }
  //     ]
  //   };
  // }


   private newsData: NewsItem[] = [
    {
      id: 1,
         title: 'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
      shortDescription:'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
      fullContent: `
        <p>'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد</p>
              `,
      date: new Date('2024-01-15'),
      category: 'أخبار',
      images: [
        './assets/pic2.jpg',
        './assets/pic3.jpg',
        './assets/pic4.jpg'
      ],
      mainImage: './assets/pic2.jpg',
      author: 'إدارة العلاقات العامة',
      tags: ['ذكاء اصطناعي', 'تكنولوجيا', 'افتتاح'],
      relatedNews: [2, 3, 4]
    },
    {
      id: 3,
         title: 'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
      shortDescription:'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
      fullContent: `
        <p>'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد</p>
              `,
      date: new Date('2024-01-15'),
      category: 'أخبار',
      images: [
        './assets/pic1.jpg',
        './assets/pic1.jpg',
        './assets/pic1.jpg'
      ],
      mainImage: './assets/pic1.jpg',
      author: 'إدارة العلاقات العامة',
      tags: ['ذكاء اصطناعي', 'تكنولوجيا', 'افتتاح'],
      relatedNews: [2, 3, 4]
    },
    {
      id: 4,
         title: 'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
      shortDescription:'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
      fullContent: `
        <p>'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد</p>
              `,
      date: new Date('2024-01-15'),
      category: 'أخبار',
      images: [
        './assets/pic2.jpg',
        './assets/pic3.jpg',
        './assets/pic4.jpg'
      ],
      mainImage: './assets/pic4.jpg',
      author: 'إدارة العلاقات العامة',
      tags: ['ذكاء اصطناعي', 'تكنولوجيا', 'افتتاح'],
      relatedNews: [2, 3, 4]
    },
    {
      id: 2,
      title: 'مجموعة من محاضرات كلية الفنون والتصميم',
      shortDescription: 'مجموعة من محاضرات كلية الفنون والتصميم',
      fullContent: `
        <p>مجموعة من محاضرات كلية الفنون والتصميم</p>
                
        <p>مجموعة من محاضرات كلية الفنون والتصميم</p>
      `,
      date: new Date('2024-01-10'),
      category: 'أنشطة',
      images: [
        './assets/activity1111.jpg',
        './assets/activity111.jpg',
        './assets/activity11.jpg',
        './assets/activity.jpg'

      ],
      mainImage: './assets/activity1111.jpg',
      author: 'إدارة شؤون الطلاب',
      tags: ['محاضرات', 'مسابقة', 'طلاب', 'فوز'],
      relatedNews: [1, 2, 5]
    },

  ];

  private categories: NewsCategory[] = [
    { id: 'أخبار', name: 'أخبار', count: 4 },
    { id: 'أنشطة', name: 'أنشطة', count: 2 },
    { id: 'فعاليات', name: 'فعاليات', count: 2 }
  ];

  getAllNews(): Observable<NewsItem[]> {
    return of(this.newsData);
  }

  getNewsByCategory(category?: string): Observable<NewsItem[]> {
    if (!category || category === 'الكل') {
      return of(this.newsData);
    }
    const filtered = this.newsData.filter(news => news.category === category);
    return of(filtered);
  }

  getNewsById(id: number): Observable<NewsItem | undefined> {
    const news = this.newsData.find(item => item.id === id);
    return of(news);
  }

  getRelatedNews(newsId: number, limit: number = 4): Observable<NewsItem[]> {
    const currentNews = this.newsData.find(item => item.id === newsId);
    if (!currentNews || !currentNews.relatedNews) {
      // Return random news if no related news specified
      const filtered = this.newsData.filter(item => item.id !== newsId).slice(0, limit);
      return of(filtered);
    }
    
    const related = this.newsData.filter(item => 
      currentNews.relatedNews!.includes(item.id)
    ).slice(0, limit);
    
    return of(related);
  }

  getCategories(): Observable<NewsCategory[]> {
    return of(this.categories);
  }

  getPreviousNews(currentId: number): Observable<NewsItem | null> {
    const currentIndex = this.newsData.findIndex(item => item.id === currentId);
    if (currentIndex > 0) {
      return of(this.newsData[currentIndex - 1]);
    }
    return of(null);
  }

  getNextNews(currentId: number): Observable<NewsItem | null> {
    const currentIndex = this.newsData.findIndex(item => item.id === currentId);
    if (currentIndex >= 0 && currentIndex < this.newsData.length - 1) {
      return of(this.newsData[currentIndex + 1]);
    }
    return of(null);
  }

  // Get news for home page - featured (latest) and side articles
  getHomeNews(): Observable<{ featured: NewsItem; side: NewsItem[] }> {
    const sortedNews = [...this.newsData].sort((a, b) => b.date.getTime() - a.date.getTime());
    const featured = sortedNews[0];
    const side = sortedNews.slice(1, 4); // Get next 3 articles
    return of({ featured, side });
  }
}