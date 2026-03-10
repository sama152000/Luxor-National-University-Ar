import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { ContactInfo, Language } from '../model/common.model';
import { ContactService } from './contact.service';
import { Contact } from '../model/contact.model';

@Injectable({
  providedIn: 'root'
})
export class CommonService {
  private currentLanguageSubject = new BehaviorSubject<string>('ar');
  public currentLanguage$: Observable<string> = this.currentLanguageSubject.asObservable();
  
  private contactInfoSubject = new BehaviorSubject<ContactInfo | null>(null);
  public contactInfo$: Observable<ContactInfo | null> = this.contactInfoSubject.asObservable();

  constructor(private contactService: ContactService) {
    this.loadContactInfo();
  }

  private loadContactInfo(): void {
    this.contactService.getAllContacts().subscribe({
      next: (contacts: Contact[]) => {
        if (contacts && contacts.length > 0) {
          const contact = contacts[0];
          this.contactInfoSubject.next({
            phone: contact.phone,
            email: contact.email,
            website: contact.webSite
          });
        }
      },
      error: () => {
        // Keep null on error - data will come from API
      }
    });
  }

  getContactInfo(): ContactInfo | null {
    return this.contactInfoSubject.value;
  }

  getLanguages(): Language[] {
    return [
      { code: 'en', name: 'EN', active: false },
      { code: 'ar', name: 'عربي', active: true }
    ];
  }

  switchLanguage(languageCode: string): void {
    this.currentLanguageSubject.next(languageCode);
    document.dir = languageCode === 'ar' ? 'rtl' : 'ltr';
  }

  getCurrentLanguage(): string {
    return this.currentLanguageSubject.value;
  }
}
