import { Injectable } from '@angular/core';
import { EventsSection } from '../model/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor() {}

  getEventsSection(): EventsSection {
    return {
      id: '1',
      title: 'الفعاليات القادمة',
      backgroundImage: 'https://images.pexels.com/photos/207692/pexels-photo-207692.jpeg?auto=compress&cs=tinysrgb&w=1600',
      viewAllLink: '/events',
      events: [
        {
          id: '1',
          title: 'ندوة بحثية',
          description: 'استكشاف آفاق علمية جديدة.',
          date: '25 أكتوبر 2025',
          image: './assets/pic1.jpg',
          link: '/events/research-symposium'
        },
        {
          id: '2',
          title: 'محاضرة في الفيزياء',
          description: 'المواد الكمية وتطبيقاتها.',
          date: '08 نوفمبر 2025',
          image: './assets/pic2.jpg',
          link: '/events/physics-seminar'
        },
        {
          id: '3',
          title: 'معرض العلوم',
          description: 'مشروعات مبتكرة من الطلاب.',
          date: '02 ديسمبر 2025',
          image: './assets/pic3.jpg',
          link: '/events/science-exhibition'
        },
        {
          id: '4',
          title: 'يوم البيئة',
          description: 'تعزيز الوعي بالاستدامة.',
          date: '15 يناير 2026',
          image: './assets/pic4.jpg',
          link: '/events/environmental-day'
        }
      ]
    };
  }
}
