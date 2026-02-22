import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { ContactInfo, ContactFormData, UniversityInfo } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  private contactInfo: ContactInfo[] = [
    {
      id: '1',
      name: 'د. جمال',
      position: 'مدير الجامعة',
      phone: '01149255811'
    },
    {
      id: '2',
      name: 'أ. محمد',
      position: 'مدير الشؤون الأكاديمية',
      phone: '01152715515'
    },
    {
      id: '3',
      name: 'أ. سهام',
      position: 'مدير الشؤون الطلابية',
      phone: '01151676342'
    },
    {
      id: '4',
      name: 'أ. محمد',
      position: 'مدير القبول والتسجيل',
      phone: '01140116223'
    }
  ];

  private universityInfo: UniversityInfo = {
    name: 'Luxor National University',
    nameAr: 'جامعة الأقصر الأهلية',
    email: 'info.lnu@luxor.edu.eg',
    address: 'Luxor, Egypt',
    addressAr: 'الأقصر، مصر'
  };

  getContactInfo(): Observable<ContactInfo[]> {
    return of(this.contactInfo).pipe(delay(300));
  }

  getUniversityInfo(): Observable<UniversityInfo> {
    return of(this.universityInfo).pipe(delay(300));
  }

  submitContactForm(formData: ContactFormData): Observable<boolean> {
    console.log('Contact form submitted:', formData);
    // Simulate API call
    return of(true).pipe(delay(1000));
  }
}