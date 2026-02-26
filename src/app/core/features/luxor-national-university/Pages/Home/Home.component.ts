import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeService } from '../../Services/home.service';
import { DiscoverComponent } from "./discover/discover.component";
import { NewsComponent } from "./news/news.component";
import { EventsComponent } from "./events/events.component";
import { FacultiesComponent } from "./faculties/faculties.component";
import { StatsComponent } from "./stats/stats.component";
import { BookComponent } from "./book/book.component";
import { HeroComponent } from './hero/hero.component';
import { GalleryComponent } from "./gallery/gallery.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
    HeroComponent,
    DiscoverComponent,
    NewsComponent,
    EventsComponent,
    FacultiesComponent,
    StatsComponent,
    BookComponent,
    GalleryComponent
],
  templateUrl: './Home.component.html',
  styleUrl: './Home.component.css'
})
export class HomeComponent implements OnInit {

  constructor(private homeService: HomeService) {
  }

  ngOnInit() {
  }
  
  
}
