import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventsService } from '../../../Services/events.service';
import { EventsSection } from '../../../model/event.model';

@Component({
  selector: 'app-events',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="events-parallax">
      <div class="parallax-bg" [style.background-image]="'url(' + eventsSection.backgroundImage + ')'"></div>

      <div class="container-custom">
        <h2 class="section-title">{{ eventsSection.title }}</h2>

        <div class="timeline-horizontal">
          <div 
            *ngFor="let event of eventsSection.events"
            class="event-card hover-lift"
          >
            <span class="event-date">{{ event.date }}</span>
            <img [src]="event.image" [alt]="event.title">
            <h4>{{ event.title }}</h4>
            <p>{{ event.description }}</p>
          </div>
        </div>

        <div class="events-btn">
          <a [href]="eventsSection.viewAllLink" class="btn-events">عرض كل الفاعليات</a>
        </div>
      </div>
    </section>
  `,
  styleUrl: './events.component.css'
})
export class EventsComponent implements OnInit {
  eventsSection!: EventsSection;

  constructor(private eventsService: EventsService) {}

  ngOnInit() {
    this.eventsSection = this.eventsService.getEventsSection();
  }
}