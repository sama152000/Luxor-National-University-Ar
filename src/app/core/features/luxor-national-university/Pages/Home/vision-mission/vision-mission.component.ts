import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Subscription } from 'rxjs';
import { NavigationService } from '../../../Services/navigation.service';
import { VisionMission } from '../../../model/home.model';
import { HomeService } from '../../../Services/home.service';

@Component({
  selector: 'app-vision-mission',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="vision-mission">
      <div class="vision-mission-content">
        <div class="container-custom">
          <div class="row">
            <!-- Vision -->
            <div class="col-lg-6 mb-5 mb-lg-0">
              <div class="content-card vision-card ">
                <div class="icon-wrapper mb-4">
                  <i [class]="visionMission.vision.icon" class="text-primary"></i>
                </div>
                <h3 class="text-primary mb-3">
                  {{ getLocalizedText(visionMission.vision.title, visionMission.vision.titleAr) }}
                </h3>
                <p class="text-dark">
                  {{ getLocalizedText(visionMission.vision.content, visionMission.vision.contentAr) }}
                </p>
              </div>
            </div>

            <!-- Mission -->
            <div class="col-lg-6">
              <div class="content-card mission-card">
                <div class="icon-wrapper mb-4">
                  <i [class]="visionMission.mission.icon" class="text-primary"></i>
                </div>
                <h3 class="text-primary mb-3">
                  {{ getLocalizedText(visionMission.mission.title, visionMission.mission.titleAr) }}
                </h3>
                <p class="text-dark">
                  {{ getLocalizedText(visionMission.mission.content, visionMission.mission.contentAr) }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .content-card {
      background: white;
      padding: 2rem;
      border-radius: 16px;
      box-shadow: 0 10px 30px rgba(56, 131, 147, 0.1);
      height: 100%;
      transition: all 0.3s ease;
      border: 1px solid rgba(56, 131, 147, 0.1);
    }

    .content-card:hover {
      transform: translateY(-8px);
      box-shadow: 0 20px 40px rgba(56, 131, 147, 0.15);
    }

    .icon-wrapper {
      width: 60px;
      height: 60px;
      background: rgba(56, 131, 147, 0.1);
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon-wrapper i {
      font-size: 1.5rem;
    }

    .vision-card {
      border-left: 4px solid var(--primary-color);
    }

    .mission-card {
      border-left: 4px solid var(--primary-dark);
    }

    @media (max-width: 768px) {
      .content-card {
        padding: 1.5rem;
        margin-bottom: 2rem;
      }
    }
  `]
})
export class VisionMissionComponent implements OnInit, OnDestroy {
  visionMission: VisionMission;
  currentLanguage: string = 'ar';
  
  private subscriptions: Subscription = new Subscription();

  constructor(
    private homeService: HomeService,
    private navigationService: NavigationService
  ) {
    this.visionMission = this.homeService.getVisionMission();
  }

  ngOnInit() {
    this.subscriptions.add(
      this.navigationService.currentLanguage$.subscribe(lang => {
        this.currentLanguage = lang;
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