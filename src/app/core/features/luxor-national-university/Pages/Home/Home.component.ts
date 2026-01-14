import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../Pages/shared/loader/loader.component';
import { HeaderComponent } from '../../Pages/shared/header/header.component';
import { HeroComponent } from '../../Pages/Home/hero/hero.component';
import { VisionMissionComponent } from '../../Pages/Home/vision-mission/vision-mission.component';
import { FooterComponent } from '../../Pages/shared/footer/footer.component';
import { HomeService } from '../../Services/home.service';
import { LoaderConfig } from '../../model/home.model';
import { UniversityGoalsComponent } from "./university-goals/university-goals.component";
import { NewsSectionComponent } from "./news-section/news-section.component";
import { FacultiesSectionComponent } from "./faculties-section/faculties-section.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    HeaderComponent,
    HeroComponent,
    VisionMissionComponent,
    FooterComponent,
    UniversityGoalsComponent,
    NewsSectionComponent,
    FacultiesSectionComponent
],
  template: `
    <!-- Loader -->
    <app-loader 
      *ngIf="showLoader" 
      (loadingComplete)="onLoadingComplete()"
    ></app-loader>

    <!-- Main Content -->
    <div *ngIf="!showLoader" class="main-content fade-in">
      <!-- Header & Hero Container -->
      <div class="header-hero-container">
        <app-header></app-header>
        <app-hero></app-hero>
      </div>

      <!-- Vision & Mission -->
      <app-vision-mission></app-vision-mission>
      
<app-university-goals></app-university-goals>
<app-news-section></app-news-section>
<app-faculties-section></app-faculties-section>
      <!-- Footer -->
      <app-footer></app-footer>
    </div>
  `,
  styles: [`
    .main-content {
      opacity: 0;
    }

    .main-content.fade-in {
      animation: fadeIn 1s ease forwards;
    }

    @keyframes fadeIn {
      to { opacity: 1; }
    }
  `]
})
export class HomeComponent implements OnInit {
  showLoader: boolean = true;
  loaderConfig: LoaderConfig;

  constructor(private homeService: HomeService) {
    this.loaderConfig = this.homeService.getLoaderConfig();
  }

  ngOnInit() {
    this.showLoader = this.loaderConfig.enabled;
  }

  onLoadingComplete() {
    this.showLoader = false;
  }
}