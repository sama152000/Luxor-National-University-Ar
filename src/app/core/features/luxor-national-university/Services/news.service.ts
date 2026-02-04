import { Injectable } from '@angular/core';
import { NewsSection } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {}

  getNewsSection(): NewsSection {
    return {
      id: '1',
      title: 'أحدث الأخبار',
      articles: [
        {
          id: '1',
          title: 'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
          excerpt: 'افتتحت جامعة الأقصر الوطنية مركز أبحاث متقدم جديد لدعم الابتكار والاستدامة والتميز العلمي عبر تخصصات متعددة.',
          image: './assets/pic2.jpg',
          category: 'عاجل',
          date: '15 أكتوبر 2025',
          link: '/news/research-center-launch',
          featured: true
        },
        {
          id: '2',
          title: 'المؤتمر الدولي حول تغير المناخ',
          image: './assets/pic1.jpg',
          category: 'فعاليات',
          date: '10 أكتوبر 2025',
          link: '/news/climate-conference',
          featured: false
        },
        {
          id: '3',
          title: 'طلاب يفوزون بجائزة الابتكار الوطنية',
          image: './assets/pic3.jpg',
          category: 'إنجاز',
          date: '28 سبتمبر 2025',
          link: '/news/innovation-award',
          featured: false
        },
        {
          id: '4',
          title: 'كلية العلوم تحصل على اعتماد دولي',
          image: './assets/pic4.jpg',
          category: 'أكاديمي',
          date: '18 سبتمبر 2025',
          link: '/news/science-accreditation',
          featured: false
        }
      ]
    };
  }
}
