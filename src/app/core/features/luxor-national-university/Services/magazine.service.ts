import { Injectable } from '@angular/core';
import { UniversityMagazine } from '../model/magazine.model';

@Injectable({
  providedIn: 'root'
})
export class MagazineService {

  constructor() {}

  getUniversityMagazine(): UniversityMagazine {
    return {
      id: '1',
      title: 'LNU Academic Quarterly',
      leftPage: {
        id: 'left',
        type: 'content',
        content: {
          title: 'Research Excellence',
          subtitle: 'Issue #47 - Fall 2025',
          text: 'Discover the groundbreaking research initiatives and academic achievements that continue to position Luxor National University as a leader in higher education and scientific innovation.',
          date: 'October 2025'
        }
      },
      rightPage: {
        id: 'right',
        type: 'image',
        image: {
          src: 'https://images.pexels.com/photos/159711/books-bookstore-book-reading-159711.jpeg?auto=compress&cs=tinysrgb&w=800',
          alt: 'University Research Facilities'
        }
      }
    };
  }
}