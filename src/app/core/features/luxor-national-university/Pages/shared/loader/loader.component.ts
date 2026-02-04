import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-container">
      <div class="loader-content">
        <div class="loader-logo">
          <div class="loader-geometric"></div>
          <div class="loader-text">LNU</div>
        </div>
        <div class="loader-title">
          <h2>جامعة الأقصر الأهلية</h2>
<p>معرفة راسخة في التاريخ – تقودها العلوم</p>

        </div>
      </div>
    </div>
  `,
  styleUrl: './loader.component.css'
})
export class LoaderComponent {
}