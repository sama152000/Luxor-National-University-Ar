import { Injectable } from '@angular/core';
import { NavigationItem } from '../model/common.model';

@Injectable({
  providedIn: 'root'
})
export class NavigationService {

  constructor() {}

  getNavigationItems(): NavigationItem[] {
    return [
      {
        id: '1',
        label: 'الرئيسية',
        icon: 'fa-solid fa-house',
        route: '/',
        active: true
      },
      {
        id: '2',
        label: 'عن الجامعة',
        icon: 'fa-solid fa-building-columns',
        route: '/about',
        active: false
      },
      {
        id: '3',
        label: 'الكليات',
        icon: 'fa-solid fa-graduation-cap',
        route: '/faculties',
        active: false
      },
      {
        id: '4',
        label: 'الخدمات',
        icon: 'fa-solid fa-flask',
        route: '/research',
        active: false
      },
      {
        id: '5',
        label: 'الأخبار',
        icon: 'fa-solid fa-newspaper',
        route: '/news',
        active: false
      },
      {
        id: '6',
        label: 'اتصل بنا',
        icon: 'fa-solid fa-envelope',
        route: '/contact',
        active: false
      }
    ];
  }
}