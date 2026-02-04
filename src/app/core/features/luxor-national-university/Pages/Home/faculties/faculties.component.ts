import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultiesService } from '../../../Services/faculties.service';
import { FacultiesSection } from '../../../model/faculty.model';

@Component({
  selector: 'app-faculties',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="orbit-section">
      <h2 class="orbit-title">{{ section.title }}</h2>

      <div class="orbit-wrapper">
        <!-- Center -->
        <!-- <a href="#" class="orbit-center hover-scale">
          <span>{{ section.centerButton.text }}</span>
          <small>{{ section.centerButton.subtext }}</small>
        </a> -->

        <!-- Orbit Items - Grid in single row -->
        <div 
          *ngFor="let faculty of section.faculties; let i = index"
          class="faculty-item-wrapper"
        >
          <div 
            class="orbit-item hover-scale"
            [class]="'item-' + (i + 1) + ' ' + faculty.cssClass"
            [style.background-image]="'url(' + faculty.backgroundImage + ')'"
          >
            <div class="overlay"></div>
          </div>
          <span class="faculty-name">{{ faculty.name }}</span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './faculties.component.css'
})
export class FacultiesComponent implements OnInit {
  section!: FacultiesSection;

  constructor(private facultiesService: FacultiesService) {}

  ngOnInit() {
    this.section = this.facultiesService.getFacultiesSection();
  }
}