import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterService } from '../../../Services/footer.service';
import { FooterData } from '../../../model/footer.model';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="site-footer">
      <div class="container-custom footer-grid">
        <!-- Column 1: Logo & About -->
        <div class="footer-col">
          <img [src]="footerData.logo.src" [alt]="footerData.logo.alt" class="footer-logo">
          <p>{{ footerData.description }}</p>
        </div>

        <!-- Dynamic Columns -->
        <div *ngFor="let section of footerData.sections" class="footer-col">
          <h4>{{ section.title }}</h4>
          <ul>
            <li *ngFor="let link of section.links">
              <a [href]="link.url">{{ link.label }}</a>
            </li>
          </ul>
        </div>

        <!-- Social Column -->
        <div class="footer-col">
          <h4>Follow Us</h4>
          <div class="footer-social">
            <a 
              *ngFor="let social of footerData.socialLinks"
              [href]="social.url"
              [title]="social.platform"
              class="hover-lift"
            >
              <i [class]="social.icon"></i>
            </a>
          </div>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer-bottom">
        <div class="container-custom">
          <p>© {{ footerData.year }} {{ footerData.copyright }}</p>
        </div>
      </div>
    </footer>
  `,
  styleUrl: './footer.component.css'
})
export class FooterComponent implements OnInit {
  footerData!: FooterData;

  constructor(private footerService: FooterService) {}

  ngOnInit() {
    this.footerData = this.footerService.getFooterData();
  }
}