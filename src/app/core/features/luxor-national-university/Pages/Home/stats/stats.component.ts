import { Component, OnInit, OnDestroy, ElementRef, ViewChildren, QueryList } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StatsService } from '../../../Services/stats.service';
import { StatsSection } from '../../../model/stats.model';

@Component({
  selector: 'app-stats',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="stats-section" #statsSectionElement>
      <div class="container-custom">
        <h2 class="stats-title">{{ statsSection.title }}</h2>

        <div class="stats-grid">
          <div 
            *ngFor="let stat of statsSection.statistics; let i = index"
            class="stat-card"
            [style.animation-delay]="stat.animationDelay + 's'"
          >
            <i [class]="stat.icon"></i>
            <h3 class="counter" #counterElement [attr.data-target]="stat.value">0</h3>
            <p>{{ stat.label }}</p>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './stats.component.css'
})
export class StatsComponent implements OnInit, OnDestroy {
  @ViewChildren('counterElement') counterElements!: QueryList<ElementRef>;
  
  statsSection!: StatsSection;
  private observer!: IntersectionObserver;
  private hasAnimated = false;

  constructor(private statsService: StatsService) {}

  ngOnInit() {
    this.statsSection = this.statsService.getStatsSection();
    this.setupIntersectionObserver();
  }

  ngOnDestroy() {
    if (this.observer) {
      this.observer.disconnect();
    }
  }

  setupIntersectionObserver() {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !this.hasAnimated) {
            this.hasAnimated = true;
            this.animateCounters();
          }
        });
      },
      { threshold: 0.5 }
    );

    // Observe the stats section
    setTimeout(() => {
      const statsElement = document.querySelector('.stats-section');
      if (statsElement) {
        this.observer.observe(statsElement);
      }
    }, 100);
  }

  animateCounters() {
    this.counterElements.forEach((element, index) => {
      const target = parseInt(element.nativeElement.getAttribute('data-target'));
      const duration = 2000; // 2 seconds
      const increment = target / (duration / 16); // 60fps
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(timer);
        }
        element.nativeElement.textContent = Math.floor(current).toLocaleString();
      }, 16);
    });
  }
}