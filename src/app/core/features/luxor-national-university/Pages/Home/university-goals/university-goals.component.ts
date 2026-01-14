import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { GoalsService } from '../../../Services/goals.service';
import { NavigationService } from '../../../Services/navigation.service';
import { GoalsSection, UniversityGoal } from '../../../model/goals.model';

@Component({
  selector: 'app-university-goals',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="university-goals">
      <div class="container-custom">
        <div class="row align-items-center">
          <!-- Logo with Shield -->
          <div class="col-lg-5" [class.order-2]="isRTL" [class.order-lg-1]="isRTL">
            <div class="logo-container">
              <div class="shield-wrapper">
                <div class="shield-outline scale-in animate-delay-1"></div>
                <img 
                  [src]="goalsSection.logo" 
                  [alt]="getLocalizedText(goalsSection.title, goalsSection.titleAr)"
                  class="university-logo scale-in animate-delay-2"
                >
              </div>
            </div>
          </div>

          <!-- Goals Content -->
          <div class="col-lg-7" [class.order-1]="isRTL" [class.order-lg-2]="isRTL">
            <div class="goals-content">
              <div class="section-header mb-5">
                <h2 class="text-primary slide-up">
                  {{ getLocalizedText(goalsSection.title, goalsSection.titleAr) }}
                </h2>
                <p class="lead text-gray slide-up animate-delay-1">
                  {{ getLocalizedText(goalsSection.subtitle, goalsSection.subtitleAr) }}
                </p>
              </div>

              <div class="goals-list">
                <div 
                  *ngFor="let goal of goals; let i = index"
                  class="goal-item slide-up"
                  [style.animation-delay]="(i * 0.2 + 0.5) + 's'"
                >
                  <div class="goal-icon">
                    <i [class]="goal.icon" class="text-primary"></i>
                  </div>
                  <div class="goal-content">
                    <h5 class="goal-title text-dark mb-2">
                      {{ getLocalizedText(goal.title, goal.titleAr) }}
                    </h5>
                    <p class="goal-description text-gray mb-0">
                      {{ getLocalizedText(goal.description, goal.descriptionAr) }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .university-goals {
      background: var(--white);
      position: relative;
      z-index: 10;
    }

    .logo-container {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      min-height: 400px;
    }

    .shield-wrapper {
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .shield-outline {
      position: absolute;
      width: 400px;
      height: 320px;
      border: 3px solid rgba(56, 131, 147, 0.3);
      border-radius: 50% 50% 50% 50% / 60% 60% 40% 40%;
      background: linear-gradient(135deg, 
        rgba(56, 131, 147, 0.05), 
        rgba(255, 255, 255, 0.1)
      );
      opacity: 0;
      transform: scale(0.8);
    }

    .university-logo {
      width: 300px;
      height: 300px;
      object-fit: contain;
      // box-shadow: var(--shadow-lg);
      opacity: 0;
      transform: scale(0.8);
      z-index: 2;
      position: relative;
    }

    .goals-content {
      padding: var(--spacing-lg) 0;
    }

    .section-header h2 {
      opacity: 0;
      font-size: clamp(2rem, 4vw, 2.5rem);
      margin-bottom: var(--spacing-sm);
    }

    .section-header p {
      opacity: 0;
      font-size: 1.125rem;
    }

    .goals-list {
      display: flex;
      flex-direction: column;
      gap: var(--spacing-lg);
    }

    .goal-item {
      display: flex;
      align-items: flex-start;
      gap: var(--spacing-md);
      padding: var(--spacing-md);
      background: var(--light-gray);
      border-radius: var(--radius-lg);
      border-left: 4px solid var(--primary-color);
      transition: var(--transition-smooth);
      opacity: 0;
      transform: translateY(30px);
    }

    .goal-item:hover {
      transform: translateY(-4px);
      box-shadow: var(--shadow-md);
      background: var(--white);
    }

    .goal-icon {
      width: 50px;
      height: 50px;
      background: rgba(56, 131, 147, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-shrink: 0;
    }

    .goal-icon i {
      font-size: 1.25rem;
    }

    .goal-content {
      flex: 1;
    }

    .goal-title {
      font-weight: 600;
      font-size: 1.125rem;
      line-height: 1.3;
    }

    .goal-description {
      font-size: 0.95rem;
      line-height: 1.5;
    }

    /* RTL Adjustments */
    [dir="rtl"] .goal-item {
      border-left: none;
      border-right: 4px solid var(--primary-color);
    }

    @media (max-width: 768px) {
      .logo-container {
        min-height: 300px;
        margin-bottom: var(--spacing-lg);
      }

      .shield-outline {
        width: 220px;
        height: 260px;
      }

      .university-logo {
        width: 140px;
        height: 140px;
      }

      .goals-content {
        padding: 0;
      }

      .goal-item {
        padding: var(--spacing-sm);
        gap: var(--spacing-sm);
      }

      .goal-icon {
        width: 40px;
        height: 40px;
      }

      .goal-icon i {
        font-size: 1rem;
      }
    }
  `]
})
export class UniversityGoalsComponent implements OnInit, OnDestroy {
  goalsSection: GoalsSection;
  goals: UniversityGoal[] = [];
  currentLanguage: string = 'ar';
  isRTL: boolean = true;
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private goalsService: GoalsService,
    private navigationService: NavigationService
  ) {
    this.goalsSection = this.goalsService.getGoalsSection();
    this.goals = this.goalsService.getGoals();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.navigationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
        this.isRTL = lang === 'ar';
      })
    );
  }

  ngOnDestroy() {
    this.subscriptions.unsubscribe();
  }

  getLocalizedText(textEn: string, textAr: string): string {
    return this.navigationService.getLocalizedText(textEn, textAr);
  }
}