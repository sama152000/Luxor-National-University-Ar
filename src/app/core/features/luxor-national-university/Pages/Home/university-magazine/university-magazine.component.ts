import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MagazineService } from '../../../Services/magazine.service';
import { UniversityMagazine } from '../../../model/magazine.model';

@Component({
  selector: 'app-university-magazine',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="magazine-section">
      <div class="container-custom">
        <h2 class="magazine-title">{{ magazine.title }}</h2>
        
        <div class="magazine-book">
          <div class="book-spine"></div>
          
          <!-- Left Page -->
          <div class="page left-page">
            <div class="page-content">
              <div *ngIf="magazine.leftPage.type === 'content'">
                <div class="content-header">
                  <h3>{{ magazine.leftPage.content!.title }}</h3>
                  <p class="subtitle">{{ magazine.leftPage.content!.subtitle }}</p>
                </div>
                <div class="content-body">
                  <p>{{ magazine.leftPage.content!.text }}</p>
                </div>
                <div class="content-footer">
                  <span class="date">{{ magazine.leftPage.content!.date }}</span>
                </div>
              </div>
              
              <div *ngIf="magazine.leftPage.type === 'image'" class="image-content">
                <img [src]="magazine.leftPage.image!.src" [alt]="magazine.leftPage.image!.alt">
              </div>
            </div>
          </div>
          
          <!-- Right Page -->
          <div class="page right-page">
            <div class="page-content">
              <div *ngIf="magazine.rightPage.type === 'content'">
                <div class="content-header">
                  <h3>{{ magazine.rightPage.content!.title }}</h3>
                  <p class="subtitle">{{ magazine.rightPage.content!.subtitle }}</p>
                </div>
                <div class="content-body">
                  <p>{{ magazine.rightPage.content!.text }}</p>
                </div>
                <div class="content-footer">
                  <span class="date">{{ magazine.rightPage.content!.date }}</span>
                </div>
              </div>
              
              <div *ngIf="magazine.rightPage.type === 'image'" class="image-content">
                <img [src]="magazine.rightPage.image!.src" [alt]="magazine.rightPage.image!.alt">
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styleUrl: './university-magazine.component.css'
})
export class UniversityMagazineComponent implements OnInit {
  magazine!: UniversityMagazine;

  constructor(private magazineService: MagazineService) {}

  ngOnInit() {
    this.magazine = this.magazineService.getUniversityMagazine();
  }
}