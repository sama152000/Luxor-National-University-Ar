import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BenefitsService } from '../../../Services/benefits.service';
import { PresidentService } from '../../../Services/president.service';
import { Benefit } from '../../../model/benefit.model';
import { President } from '../../../model/president.model';

@Component({
  selector: 'app-deans-word',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="president-benefits">
      <div class="container-custom two-column">
        <!-- LEFT: BENEFITS -->
        <div class="benefits-grid">
          <div 
            *ngFor="let benefit of benefits" 
            class="benefit-card hover-lift"
            [style.background-image]="'url(' + benefit.backgroundImage + ')'"
          >
            <div class="overlay"></div>
            <i [class]="benefit.icon"></i>
            <h4>{{ benefit.title }}</h4>
            <p>{{ benefit.description }}</p>
          </div>
        </div>

        <!-- RIGHT: PRESIDENT WORD -->
        <div class="president-box hover-lift">
          <img [src]="president.image" [alt]="president.name">
          <h3>President's Welcome</h3>
          <p>{{ president.welcomeMessage }}</p>
          <span class="president-name">
            {{ president.name }}<br>
            <small>{{ president.title }}</small>
          </span>
        </div>
      </div>
    </section>
  `,
  styleUrl: './deans-word.component.css'
})
export class DeansWordComponent implements OnInit {
  benefits!: Benefit[];
  president!: President;

  constructor(
    private benefitsService: BenefitsService,
    private presidentService: PresidentService
  ) {}

  ngOnInit() {
    this.benefits = this.benefitsService.getBenefits();
    this.president = this.presidentService.getPresident();
  }
}