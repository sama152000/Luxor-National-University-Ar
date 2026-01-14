import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { NavigationItem, LanguageOption, UniversityInfo } from '../model/navigation.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {
  private currentLanguageSubject = new BehaviorSubject<string>('ar');
  private menuOpenSubject = new BehaviorSubject<boolean>(false);

  currentLanguage$ = this.currentLanguageSubject.asObservable();
  menuOpen$ = this.menuOpenSubject.asObservable();

  private navigationItems: NavigationItem[] = [
    {
      id: 'home',
      title: 'Home',
      titleAr: 'الرئيسية',
      route: '/',
      icon: 'pi pi-home',
      image: 'https://images.pexels.com/photos/256490/pexels-photo-256490.jpeg?auto=compress&cs=tinysrgb&w=300',
      order: 1
    },
    {
      id: 'faculties',
      title: 'Faculties',
      titleAr: 'الكليات',
      route: '/faculties',
      icon: 'pi pi-building',
      image: 'https://images.pexels.com/photos/159844/cellular-education-classroom-159844.jpeg?auto=compress&cs=tinysrgb&w=300',
      order: 2
    },
    {
      id: 'news',
      title: 'News',
      titleAr: 'الأخبار',
      route: '/news',
      icon: 'pi pi-bookmark',
      image: 'https://images.pexels.com/photos/518543/pexels-photo-518543.jpeg?auto=compress&cs=tinysrgb&w=300',
      order: 3
    },
    {
      id: 'contact',
      title: 'Contact Us',
      titleAr: 'تواصل معنا',
      route: '/contact',
      icon: 'pi pi-phone',
      image: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=300',
      order: 4
    }
  ];

  private languages: LanguageOption[] = [
    {
      code: 'en',
      name: 'English',
      direction: 'ltr'
    },
    {
      code: 'ar',
      name: 'العربية',
      direction: 'rtl'
    }
  ];

  private universityInfo: UniversityInfo = {
    name: 'Luxor National University',
    nameAr: 'جامعة الأقصر الأهلية',
    tagline: 'Your Future Starts Here',
    taglineAr: 'مستقبلك يبدأ من هنا',
    logo: './assets/lnu.logo.png',
    description: 'A leading private university committed to excellence in education, research, and community service.',
    descriptionAr: 'جامعة أهلية رائدة ملتزمة بالتميز في التعليم والبحث العلمي وخدمة المجتمع.',
    establishedYear: 2015,
    contact: {
      phone: '+20 95 000 0000',
      email: 'info@luxornational.edu.eg',
      address: 'Luxor, Egypt',
      addressAr: 'الأقصر، مصر'
    },
    socialMedia: {
      facebook: 'https://facebook.com/luxornational',
      twitter: 'https://twitter.com/luxornational',
      instagram: 'https://instagram.com/luxornational',
    }
  };

  getNavigationItems(): NavigationItem[] {
    return this.navigationItems.sort((a, b) => a.order - b.order);
  }

  getLanguages(): LanguageOption[] {
    return this.languages;
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }

  setCurrentLanguage(language: string): void {
    this.currentLanguageSubject.next(language);
    
    // Update document direction
    const currentLang = this.languages.find(l => l.code === language);
    if (currentLang) {
      document.documentElement.setAttribute('dir', currentLang.direction);
      document.documentElement.setAttribute('lang', language);
    }
  }

  getUniversityInfo(): UniversityInfo {
    return this.universityInfo;
  }

  openMenu(): void {
    this.menuOpenSubject.next(true);
  }

  closeMenu(): void {
    this.menuOpenSubject.next(false);
  }

  isMenuOpen(): Observable<boolean> {
    return this.menuOpen$;
  }

  getLocalizedText(textEn: string, textAr: string): string {
    return this.currentLanguageSubject.value === 'ar' ? textAr : textEn;
  }
}