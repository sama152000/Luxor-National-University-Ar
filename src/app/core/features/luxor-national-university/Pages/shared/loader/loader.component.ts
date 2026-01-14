import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-loader',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="loader-container" [style.opacity]="opacity" [style.visibility]="visibility">
      <div class="loader">
        <div class="loader-geometric"></div>
      </div>
    </div>
  `,
  styles: [`
    .loader-container {
      transition: opacity 0.5s ease, visibility 0.5s ease;
    }
  `]
})
export class LoaderComponent implements OnInit {
  @Output() loadingComplete = new EventEmitter<void>();
  
  opacity = 1;
  visibility = 'visible';

  ngOnInit() {
    // Simulate loading time
    setTimeout(() => {
      this.startHideAnimation();
    }, 2500);
  }

  private startHideAnimation() {
    this.opacity = 0;
    
    setTimeout(() => {
      this.visibility = 'hidden';
      this.loadingComplete.emit();
    }, 500);
  }
}