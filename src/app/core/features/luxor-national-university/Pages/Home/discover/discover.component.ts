import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';
import { DiscoverService } from '../../../Services/discover.service';
import { DiscoverSection } from '../../../model/discover.model';

@Component({
  selector: 'app-discover',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="video-section">
      <div class="container-custom">
        <div class="video-grid">
          <!-- Text -->
          <div class="video-text">
            <h2 class="slide-left">{{ section.title }}</h2>
            <p class="slide-left animate-delay-1">{{ section.description }}</p>
            <a href="/assets/magazine.pdf" download class="download-btn" aria-label="Download magazine"> قم بتحميل كتيب الجامعه الاهلية</a>
          </div>

          <!-- Video -->
          <!-- <div class="video-frame slide-right animate-delay-2">
            <iframe
              [src]="getSafeVideoUrl(section.videoUrl)"
              [title]="section.videoTitle"
              allowfullscreen
              loading="lazy">
            </iframe>
          </div> -->
        </div>
      </div>
    </section>
  `,
  styleUrl: './discover.component.css'
})
export class DiscoverComponent implements OnInit {
  section!: DiscoverSection;

  constructor(
    private discoverService: DiscoverService,
    private sanitizer: DomSanitizer
  ) {}

  ngOnInit() {
    this.section = this.discoverService.getDiscoverSection();
  }

  getSafeVideoUrl(url: string): SafeResourceUrl {
    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }
}