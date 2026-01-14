import { Injectable } from '@angular/core';
import { NewsArticle, NewsSection } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {
  private newsSection: NewsSection = {
    title: 'Latest News',
    titleAr: 'آخر الأخبار',
    subtitle: 'Stay Updated with University Events',
    subtitleAr: 'ابق على اطلاع بأحداث الجامعة',
    articles: [
      {
        id: 'news-1',
        title: 'New Engineering Faculty Building Opens',
        titleAr: 'افتتاح مبنى كلية الهندسة الجديد',
        excerpt: 'State-of-the-art facilities now available for engineering students with modern laboratories and research centers.',
        excerptAr: 'مرافق حديثة متاحة الآن لطلاب الهندسة مع مختبرات ومراكز بحثية حديثة.',
        content: 'The new Engineering Faculty building represents a significant milestone in our university\'s commitment to providing world-class education...',
        contentAr: 'يمثل مبنى كلية الهندسة الجديد معلماً مهماً في التزام جامعتنا بتقديم تعليم عالمي المستوى...',
        image: './assets/pic1.jpg',
        publishDate: new Date('2024-01-15'),
        author: 'Dr. Ahmed Hassan',
        authorAr: 'د. أحمد حسن',
        category: 'Infrastructure',
        categoryAr: 'البنية التحتية',
        slug: 'new-engineering-building-opens',
        featured: true
      },
      {
        id: 'news-2',
        title: 'International Research Partnership Announced',
        titleAr: 'الإعلان عن شراكة بحثية دولية',
        excerpt: 'Luxor National University partners with leading European institutions for groundbreaking research initiatives.',
        excerptAr: 'تتشارك جامعة الأقصر الأهلية مع مؤسسات أوروبية رائدة في مبادرات بحثية رائدة.',
        content: 'This partnership will enable our researchers to collaborate on cutting-edge projects in renewable energy and sustainable development...',
        contentAr: 'ستمكن هذه الشراكة باحثينا من التعاون في مشاريع متطورة في الطاقة المتجددة والتنمية المستدامة...',
        image: './assets/pic2.jpg',
        publishDate: new Date('2024-01-10'),
        author: 'Prof. Sarah Mohamed',
        authorAr: 'أ.د. سارة محمد',
        category: 'Research',
        categoryAr: 'البحث العلمي',
        slug: 'international-research-partnership',
        featured: true
      },
      {
        id: 'news-3',
        title: 'Student Innovation Competition Winners',
        titleAr: 'الفائزون في مسابقة الابتكار الطلابي',
        excerpt: 'Outstanding student projects recognized in annual innovation competition showcasing creativity and technical excellence.',
        excerptAr: 'تم تكريم مشاريع طلابية متميزة في مسابقة الابتكار السنوية التي تعرض الإبداع والتميز التقني.',
        content: 'The annual student innovation competition highlighted remarkable projects spanning artificial intelligence, biotechnology, and sustainable engineering...',
        contentAr: 'سلطت مسابقة الابتكار الطلابي السنوية الضوء على مشاريع رائعة تشمل الذكاء الاصطناعي والتكنولوجيا الحيوية والهندسة المستدامة...',
        image: './assets/pic3.jpg',
        publishDate: new Date('2024-01-05'),
        author: 'Dr. Omar Ali',
        authorAr: 'د. عمر علي',
        category: 'Students',
        categoryAr: 'الطلاب',
        slug: 'student-innovation-winners',
        featured: false
      },
      {
        id: 'news-4',
        title: 'New Medical Research Center Launched',
        titleAr: 'إطلاق مركز البحوث الطبية الجديد',
        excerpt: 'Advanced medical research facility opens to support breakthrough studies in healthcare and medical technology.',
        excerptAr: 'افتتاح مرفق بحوث طبية متقدم لدعم الدراسات الرائدة في الرعاية الصحية والتكنولوجيا الطبية.',
        content: 'The new Medical Research Center is equipped with state-of-the-art laboratories and equipment to facilitate groundbreaking medical research...',
        contentAr: 'مركز البحوث الطبية الجديد مجهز بمختبرات ومعدات حديثة لتسهيل البحوث الطبية الرائدة...',
        image: './assets/pic4.jpg',
        publishDate: new Date('2023-12-28'),
        author: 'Dr. Fatima Nasser',
        authorAr: 'د. فاطمة ناصر',
        category: 'Research',
        categoryAr: 'البحث العلمي',
        slug: 'medical-research-center-launched',
        featured: false
      },
      {
        id: 'news-5',
        title: 'Graduation Ceremony 2024 Announced',
        titleAr: 'الإعلان عن حفل التخرج 2024',
        excerpt: 'Join us in celebrating the achievements of our graduating class in a memorable ceremony honoring academic excellence.',
        excerptAr: 'انضموا إلينا في الاحتفال بإنجازات دفعة التخرج في حفل لا يُنسى يكرم التميز الأكاديمي.',
        content: 'The graduation ceremony will take place in our main auditorium, celebrating the achievements of over 500 graduates across all faculties...',
        contentAr: 'سيقام حفل التخرج في القاعة الرئيسية، احتفالاً بإنجازات أكثر من 500 خريج من جميع الكليات...',
        image: './assets/pic1.jpg',
        publishDate: new Date('2023-12-20'),
        author: 'University Administration',
        authorAr: 'إدارة الجامعة',
        category: 'Events',
        categoryAr: 'الفعاليات',
        slug: 'graduation-ceremony-2024',
        featured: false
      }
    ]
  };

  getNewsSection(): NewsSection {
    return this.newsSection;
  }

  getAllNews(): NewsArticle[] {
    return this.newsSection.articles.sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  }

  getFeaturedNews(): NewsArticle[] {
    return this.newsSection.articles
      .filter(article => article.featured)
      .sort((a, b) => b.publishDate.getTime() - a.publishDate.getTime());
  }

  getRecentNews(limit: number = 5): NewsArticle[] {
    return this.getAllNews().slice(0, limit);
  }

  getNewsById(id: string): NewsArticle | undefined {
    return this.newsSection.articles.find(article => article.id === id);
  }

  getNewsBySlug(slug: string): NewsArticle | undefined {
    return this.newsSection.articles.find(article => article.slug === slug);
  }

  getNewsByCategory(category: string): NewsArticle[] {
    return this.newsSection.articles.filter(article => 
      article.category.toLowerCase() === category.toLowerCase()
    );
  }
}