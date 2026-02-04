import { Injectable } from '@angular/core';
import { DiscoverSection } from '../model/discover.model';

@Injectable({
  providedIn: 'root'
})
export class DiscoverService {

  constructor() {}

  getDiscoverSection(): DiscoverSection {
    return {
      id: '1',
      title: 'اكتشف جامعة الأقصر الوطنية',
      description: 'استكشف بيئتنا الأكاديمية، ومرافقنا الحديثة، وتراثنا الثقافي الغني من خلال هذا الفيديو التعريفي القصير.',
      videoUrl: './assets/mag.PNG',
      videoTitle: 'مقدمة عن جامعة الأقصر الوطنية'
    };
  }
}
