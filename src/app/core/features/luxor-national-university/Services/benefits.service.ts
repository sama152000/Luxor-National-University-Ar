import { Injectable } from '@angular/core';
import { Benefit } from '../model/benefit.model';

@Injectable({
  providedIn: 'root'
})
export class BenefitsService {

  constructor() {}

  getBenefits(): Benefit[] {
    return [
      {
        id: '1',
        title: 'Quality Education',
        description: 'International academic standards and modern curricula.',
        icon: 'fa-solid fa-graduation-cap',
        backgroundImage: 'https://images.pexels.com/photos/5428836/pexels-photo-5428836.jpeg?auto=compress&cs=tinysrgb&w=800',
        cssClass: 'bg-edu'
      },
      {
        id: '2',
        title: 'Modern Facilities',
        description: 'A learning environment equipped with the latest technology and equipment.',
        icon: 'fa-solid fa-microscope',
        backgroundImage: 'https://images.pexels.com/photos/2280547/pexels-photo-2280547.jpeg?auto=compress&cs=tinysrgb&w=800',
        cssClass: 'bg-research'
      },
      {
        id: '3',
        title: 'Distinguished Faculty',
        description: 'Highly qualified academic staff with extensive national and international experience.',
        icon: 'fa-solid fa-globe',
        backgroundImage: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg?auto=compress&cs=tinysrgb&w=800',
        cssClass: 'bg-global'
      },
      {
        id: '4',
        title: 'Global Opportunities',
        description: 'International partnerships and exchange opportunities for students.',
        icon: 'fa-solid fa-landmark',
        backgroundImage: 'https://images.pexels.com/photos/267885/pexels-photo-267885.jpeg?auto=compress&cs=tinysrgb&w=800',
        cssClass: 'bg-heritage'
      }
    ];
  }
}