import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeroService } from '../../../Services/hero.service';
import { HeroSlide, HeroDot } from '../../../model/hero.model';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
 templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent implements OnInit, OnDestroy {
  slides!: HeroSlide[];
  dots!: HeroDot[];
  currentSlideIndex = 0;
  slideInterval: any;

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.slides = this.heroService.getHeroSlides();
    this.dots = this.heroService.getHeroDots();
    this.startSlideShow();
  }

  ngOnDestroy() {
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
    }
  }

  startSlideShow() {
    this.slideInterval = setInterval(() => {
      this.nextSlide();
    }, 6000);
  }

  nextSlide() {
    this.currentSlideIndex = (this.currentSlideIndex + 1) % this.slides.length;
    this.updateActiveSlide();
  }

  switchSlide(index: number) {
    this.currentSlideIndex = index;
    this.updateActiveSlide();
    
    // Reset interval
    if (this.slideInterval) {
      clearInterval(this.slideInterval);
      this.startSlideShow();
    }
  }

  updateActiveSlide() {
    this.slides = this.slides.map((slide, index) => ({
      ...slide,
      active: index === this.currentSlideIndex
    }));

    this.dots = this.dots.map((dot, index) => ({
      ...dot,
      active: index === this.currentSlideIndex
    }));
  }
}
