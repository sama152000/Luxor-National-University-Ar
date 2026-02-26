import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { GalleryItem } from '../model/gallery.model';

@Injectable({
  providedIn: 'root'
})
export class GalleryService {

  constructor() { }

  getGalleryImages(): Observable<GalleryItem[]> {
    const galleryImages: GalleryItem[] = [
      {
        id: 1,
        imageUrl: 'assets/activity.jpg',
      },
      {
        id: 2,
        imageUrl: 'assets/activity11.jpg',
      },
      {
        id: 3,
        imageUrl: 'assets/activity111.jpg',
      
      },
      {
        id: 4,
        imageUrl: 'assets/activity1111.jpg',
       
      },
      {
        id: 5,
        imageUrl: 'assets/pic1.jpg',
       
      },
      {
        id: 6,
        imageUrl: 'assets/pic2.jpg',
       
      },
      {
        id: 7,
        imageUrl: 'assets/pic3.jpg',
       
      },
      {
        id: 8,
        imageUrl: 'assets/pic4.jpg',
       
      }
    ];

    return of(galleryImages);
  }
}