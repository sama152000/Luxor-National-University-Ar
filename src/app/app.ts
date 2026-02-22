import { Component, HostListener } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { FooterComponent } from "./core/features/luxor-national-university/Pages/shared/footer/footer.component";
import { MainNavComponent } from "./core/features/luxor-national-university/Pages/shared/main-nav/main-nav.component";
import { TopNavComponent } from "./core/features/luxor-national-university/Pages/shared/top-nav/top-nav.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ButtonModule, CommonModule, RouterModule, FooterComponent, MainNavComponent, TopNavComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  protected title = 'جامعة الاقصر الاهلية';
  showScrollButton = false;

  @HostListener('window:scroll', [])
  onWindowScroll() {
    this.showScrollButton = window.pageYOffset > 300;
  }

  scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}
