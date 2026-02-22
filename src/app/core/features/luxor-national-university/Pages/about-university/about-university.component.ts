import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AboutUniversityService } from '../../Services/about-university.service';
import { AboutUniversitySection } from '../../model/about-university.model';

@Component({
  selector: 'app-about-university',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './about-university.component.html',
  styleUrls: ['./about-university.component.css']
})
export class AboutUniversityComponent implements OnInit {
  sections: AboutUniversitySection[] = [];
  activeSection: AboutUniversitySection | null = null;
  isLoading = false;

  tabs = [
    { id: 'overview', title: 'نبذة عامة', icon: 'pi pi-home' },
    { id: 'vision', title: 'الرؤية', icon: 'pi pi-eye' },
    { id: 'mission', title: 'الرسالة', icon: 'pi pi-flag' },
    { id: 'goals', title: 'الأهداف', icon: 'pi pi-bullseye' },
    { id: 'history', title: 'تاريخ الجامعة', icon: 'pi pi-clock' }
  ];

  constructor(private aboutService: AboutUniversityService) {}

  ngOnInit(): void {
    this.loadData();
    this.setActiveTab('overview');
  }

  loadData(): void {
    this.aboutService.getAboutData().subscribe(data => {
      this.sections = Object.values(data);
    });
  }

  setActiveTab(sectionId: string): void {
    this.isLoading = true;
    
    setTimeout(() => {
      const section = this.sections.find(s => s.id === sectionId);
      this.activeSection = section || null;
      this.isLoading = false;
    }, 200);
  }

  isActiveTab(sectionId: string): boolean {
    return this.activeSection?.id === sectionId;
  }
}