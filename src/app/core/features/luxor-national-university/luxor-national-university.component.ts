import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from "./Pages/shared/footer/footer.component";
import { TopNavComponent } from "./Pages/shared/top-nav/top-nav.component";
import { MainNavComponent } from "./Pages/shared/main-nav/main-nav.component";


@Component({
  selector: 'app-luxor-national-university',
  templateUrl: './luxor-national-university.component.html',
  styleUrls: ['./luxor-national-university.component.css'],
  imports: [FooterComponent, RouterOutlet, TopNavComponent, MainNavComponent]
})
export class LuxorNationalUniversityComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
