import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from '../../../Services/common.service';
import { ContactInfo, Language } from '../../../model/common.model';

@Component({
  selector: 'app-top-nav',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './top-nav.component.html',
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