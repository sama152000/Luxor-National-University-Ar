import { Injectable } from '@angular/core';
import { HeroContent, VisionMission, LoaderConfig } from '../model/home.model';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  private heroContent: HeroContent = {
    title: 'Luxor National University',
    titleAr: 'جامعة الأقصر الأهلية',
    subtitle: 'Your Future Starts Here',
    subtitleAr: 'مستقبلك يبدأ من هنا',
    ctaText: 'Contact Us',
    ctaTextAr: 'تواصل معنا',
    ctaLink: '/contact',
    images: [
      './assets/pic4.jpg',
      './assets/pic2.jpg',
      './assets/pic3.jpg',
      './assets/pic1.jpg'
    ]
  };

  private visionMission: VisionMission = {
    vision: {
      title: 'Our Vision',
      titleAr: 'رؤيتنا',
      content: 'To be a leading educational institution that inspires innovation, fosters critical thinking, and prepares students to become leaders who make a positive impact on society and the world.',
      contentAr: 'أن نكون مؤسسة تعليمية رائدة تلهم الابتكار وتعزز التفكير النقدي وتعد الطلاب ليصبحوا قادة يؤثرون إيجابياً على المجتمع والعالم.',
      icon: 'pi pi-eye'
    },
    mission: {
      title: 'Our Mission',
      titleAr: 'رسالتنا',
      content: 'To provide high-quality education that combines academic excellence with practical experience, enabling our students to develop the knowledge, skills, and values necessary for successful careers and meaningful contributions to society.',
      contentAr: 'تقديم تعليم عالي الجودة يجمع بين التميز الأكاديمي والخبرة العملية، مما يمكن طلابنا من تطوير المعرفة والمهارات والقيم اللازمة للمهن الناجحة والمساهمات المعنوية في المجتمع.',
      icon: 'pi pi-flag'
    }
  };

  private loaderConfig: LoaderConfig = {
    enabled: true,
    duration: 3000,
    animationType: 'geometric'
  };

  getHeroContent(): HeroContent {
    return this.heroContent;
  }

  getVisionMission(): VisionMission {
    return this.visionMission;
  }

  getLoaderConfig(): LoaderConfig {
    return this.loaderConfig;
  }
}