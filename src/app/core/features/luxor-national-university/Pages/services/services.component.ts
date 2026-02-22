import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { ServicesService } from '../../Services/services.service';
import { Service } from '../../model/service.model';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [CommonModule],
  templateUrl:'./services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit, OnDestroy {
  services: Service[] = [];
  currentIndex = 0;
  isTransitioning = false;
  autoPlayInterval: any;
  private destroy$ = new Subject<void>();

  constructor(private servicesService: ServicesService) {}

  ngOnInit(): void {
    this.loadServices();
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
    this.stopAutoPlay();
  }

  private loadServices(): void {
    this.servicesService.getServices()
      .pipe(takeUntil(this.destroy$))
      .subscribe(services => {
        this.services = services;
        // Start auto-play after services are loaded
        setTimeout(() => {
          this.startAutoPlay();
        }, 1000);
      });
  }

  private startAutoPlay(): void {
    this.autoPlayInterval = setInterval(() => {
      this.nextSlide();
    }, 8000);
  }

  private stopAutoPlay(): void {
    if (this.autoPlayInterval) {
      clearInterval(this.autoPlayInterval);
      this.autoPlayInterval = null;
    }
  }

  nextSlide(): void {
    if (this.isTransitioning || this.services.length === 0) return;
    
    this.isTransitioning = true;
    this.currentIndex = (this.currentIndex + 1) % this.services.length;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  prevSlide(): void {
    if (this.isTransitioning || this.services.length === 0) return;
    
    this.isTransitioning = true;
    this.currentIndex = this.currentIndex === 0 ? this.services.length - 1 : this.currentIndex - 1;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  goToSlide(index: number): void {
    if (this.isTransitioning || index === this.currentIndex) return;
    
    this.isTransitioning = true;
    this.currentIndex = index;
    
    setTimeout(() => {
      this.isTransitioning = false;
    }, 500);
  }

  onMouseEnter(): void {
    this.stopAutoPlay();
  }

  onMouseLeave(): void {
    this.startAutoPlay();
  }

  getCurrentService(): Service | null {
    return this.services[this.currentIndex] || null;
  }

  trackByService(index: number, service: Service): string {
    return service.id;
  }
}