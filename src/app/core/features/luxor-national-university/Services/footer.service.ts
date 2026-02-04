import { Injectable } from '@angular/core';
import { FooterData } from '../model/footer.model';

@Injectable({
  providedIn: 'root'
})
export class FooterService {

  constructor() {}

  getFooterData(): FooterData {
    return {
      id: '1',
      logo: {
        src: './assets/lnu.logo.png',
        alt: 'جامعة الأقصر الوطنية',
        title: 'شعار الجامعة'
      },
      description: 'جامعة الأقصر الوطنية ملتزمة بالتميز الأكاديمي، والبحث العلمي، وخدمة المجتمع.',
      sections: [
        {
          title: 'روابط هامة',
          links: [
            { label: 'عن الجامعة', url: '/about' },
            { label: 'الكليات', url: '/faculties' },
            { label: 'الأخبار والفعاليات', url: '/news' },
            { label: 'تواصل معنا', url: '/research' }
          ]
        },
        {
          title: 'الخدمات',
          links: [
            { label: 'بوابة الطلاب', url: '/student-portal' },
            { label: 'بوابة أعضاء هيئة التدريس', url: '/staff-portal' },
            { label: 'المكتبة', url: '/library' },
            { label: 'التعلم الإلكتروني', url: '/e-learning' }
          ]
        }
      ],
      socialLinks: [
        { platform: 'فيسبوك', url: '#', icon: 'fab fa-facebook-f' },
        { platform: 'تويتر', url: '#', icon: 'fab fa-twitter' },
        { platform: 'إنستجرام', url: '#', icon: 'fab fa-instagram' },
        { platform: 'لينكدإن', url: '#', icon: 'fab fa-linkedin-in' }
      ],
      copyright: 'جامعة الأقصر الوطنية. جميع الحقوق محفوظة.',
      year: new Date().getFullYear()
    };
  }
}
