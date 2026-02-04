import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../../Services/common.service';
import { ContactInfo, Language } from '../../../model/common.model';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="top-header">
      <div class="container-custom top-header-inner">
        <div class="top-info">
          <span>  {{ contactInfo.phone }}<i class="fa-solid fa-phone"></i></span>
          <span>{{ contactInfo.email }}<i class="fa-solid fa-envelope"></i> </span>
        </div>
        <div class="top-lang">
          <a 
            *ngFor="let lang of languages" 
            href="#" 
            [class.active]="lang.active"
            (click)="switchLanguage(lang.code)"
          >
            {{ lang.name }}
          </a>
        </div>
      </div>
    </div>
  `,
  styleUrl: './top-nav.component.css'
})
export class TopNavComponent implements OnInit {
  contactInfo!: ContactInfo;
  languages!: Language[];

  constructor(private commonService: CommonService) {}

  ngOnInit() {
    this.contactInfo = this.commonService.getContactInfo();
    this.languages = this.commonService.getLanguages();
  }

  switchLanguage(languageCode: string) {
    this.languages = this.languages.map(lang => ({
      ...lang,
      active: lang.code === languageCode
    }));
    this.commonService.switchLanguage(languageCode);
  }
}