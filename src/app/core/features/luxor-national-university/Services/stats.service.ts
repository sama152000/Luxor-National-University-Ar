import { Injectable } from '@angular/core';
import { StatsSection } from '../model/stats.model';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() {}

  getStatsSection(): StatsSection {
    return {
      id: '1',
      title: 'الجامعة في أرقام',
      statistics: [
        {
          id: '1',
          icon: 'fa-solid fa-user-graduate',
          value: 12000,
          label: 'الطلاب',
          animationDelay: 0.2
        },
        {
          id: '2',
          icon: 'fa-solid fa-chalkboard-user',
          value: 850,
          label: 'أعضاء هيئة التدريس',
          animationDelay: 0.4
        },
        {
          id: '3',
          icon: 'fa-solid fa-flask',
          value: 120,
          label: 'معامل البحث',
          animationDelay: 0.6
        },
        {
          id: '4',
          icon: 'fa-solid fa-globe',
          value: 35,
          label: 'شركاء دوليون',
          animationDelay: 0.8
        }
      ]
    };
  }
}
