import { Injectable } from '@angular/core';
import { FacultiesSection } from '../model/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {

  constructor() {}

  getFacultiesSection(): FacultiesSection {
    return {
      id: '1',
      title: 'الكليات ',
      centerButton: {
        text: 'انضم إلينا الآن',
        subtext: 'جامعة الأقصر الوطنية',
        link: '/apply'
      },
      faculties: [
        {
          id: '1',
          name: 'كلية الحاسبات والمعلومات والذكاء الاصطناعي',
          icon: 'fa-solid fa-flask',
          backgroundImage: './assets/f3.jpg',
          cssClass: 'bg-science'
        },
        {
          id: '2',
          name: 'كلية السياحة والآثار',
          icon: 'fa-solid fa-laptop-code',
          backgroundImage: './assets/f4.jpg',
          cssClass: 'bg-computer'
        },
        {
          id: '3',
          name: 'كلية الفنون والتصميم',
          icon: 'fa-solid fa-leaf',
          backgroundImage: './assets/f1.jpg',
          cssClass: 'bg-env'
        },
        {
          id: '4',
          name: 'كلية اللغات والترجمة والعلوم الإنسانية',
          icon: 'fa-solid fa-calculator',
          backgroundImage: './assets/f2.jpg',
          cssClass: 'bg-math'
        },
        // {
        //   id: '5',
        //   name: 'برنامج الأنظمة الذكية لصناعة السياحة والضيافة',
        //   icon: 'fa-solid fa-dna',
        //   backgroundImage: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg?auto=compress&cs=tinysrgb&w=800',
        //   cssClass: 'bg-bio'
        // },
        // {
        //   id: '6',
        //   name: 'برنامج نظم المعلومات الأثرية والتراثية',
        //   icon: 'fa-solid fa-atom',
        //   backgroundImage: 'https://images.pexels.com/photos/1591447/pexels-photo-1591447.jpeg?auto=compress&cs=tinysrgb&w=800',
        //   cssClass: 'bg-physics'
        // }
      ]
    };
  }
}
