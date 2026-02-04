import { Injectable } from '@angular/core';
import { HeroSlide, HeroDot } from '../model/hero.model';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() {}

  getHeroSlides(): HeroSlide[] {
    return [
      {
        id: '1',
        backgroundImage: './assets/slide1.jpeg',
        title: {
          words: ['جامعة', 'الأقصر', 'القومية']
        },
        subtitle: 'المعرفة متجذرة في التاريخ - يقودها العلم',
        active: true
      },
      {
        id: '2',
        backgroundImage: './assets/slide2.jpeg',


        title: {
          words: ['إلهام', 'الابتكار']
        },
        subtitle: 'تثقيف الأجيال للمستقبل',
        active: false
      },
      {
        id: '3',
        backgroundImage: './assets/slide3.jpeg',


        title: {
          words: ['بحث', 'ذو', 'هدف']
        },
        subtitle: 'العلم من أجل التنمية المستدامة',
        active: false
      }
    ];
  }

  getHeroDots(): HeroDot[] {
    return [
      { id: '1', label: 'LNU', active: true, progress: 0 },
      { id: '2', label: 'LNU', active: false, progress: 0 },
      { id: '3', label: 'LNU', active: false, progress: 0 }
    ];
  }
}