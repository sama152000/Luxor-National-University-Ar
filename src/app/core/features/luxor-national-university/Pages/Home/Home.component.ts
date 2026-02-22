import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoaderComponent } from '../../Pages/shared/loader/loader.component';
// import { FooterComponent } from '../../Pages/shared/footer/footer.component';
import { HomeService } from '../../Services/home.service';
import { LoaderConfig } from '../../model/home.model';
import { TopNavComponent } from "../shared/top-nav/top-nav.component";
import { HeroComponent } from "./hero/hero.component";
import { DeansWordComponent } from "./deans-word/deans-word.component";
import { MainNavComponent } from "../shared/main-nav/main-nav.component";
import { DiscoverComponent } from "./discover/discover.component";
import { NewsComponent } from "./news/news.component";
import { EventsComponent } from "./events/events.component";
import { FacultiesComponent } from "./faculties/faculties.component";
import { StatsComponent } from "./stats/stats.component";
import { FooterComponent } from "../shared/footer/footer.component";
import { BookComponent } from "./book/book.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    LoaderComponent,
    TopNavComponent,
    HeroComponent,
    DeansWordComponent,
    MainNavComponent,
    DiscoverComponent,
    NewsComponent,
    EventsComponent,
    FacultiesComponent,
    StatsComponent,
    FooterComponent,
    BookComponent
],
  template: `
    <!-- Loader -->
    <app-loader 
      *ngIf="showLoader" 
      (loadingComplete)="onLoadingComplete()"
    ></app-loader>

    <!-- <app-top-nav></app-top-nav>
    <app-main-nav></app-main-nav> -->
    <!-- Main Content -->
      <!-- Header & Hero Container -->
<app-hero></app-hero>
<app-book></app-book>
<!-- <app-deans-word></app-deans-word> -->
<app-news></app-news>
<app-discover></app-discover>
<app-events></app-events>
<app-faculties></app-faculties>
<app-stats></app-stats>


      <!-- Vision & Mission -->
      
      <!-- Footer -->
       <!-- <app-footer></app-footer> -->
      <!-- <app-footer></app-footer> -->
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