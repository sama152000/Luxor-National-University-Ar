import { Injectable } from '@angular/core';
import { UniversityGoal, GoalsSection } from '../model/goals.model';

@Injectable({
  providedIn: 'root'
})
export class GoalsService {
  private goalsSection: GoalsSection = {
    title: 'Our Goals',
    titleAr: 'أهدافنا',
    subtitle: 'Building Tomorrow\'s Leaders',
    subtitleAr: 'بناء قادة المستقبل',
    logo: './assets/lnu.logo.png',
    goals: [
      {
        id: 'goal-1',
        title: 'Academic Excellence',
        titleAr: 'التميز الأكاديمي',
        description: 'Provide world-class education that meets international standards and prepares students for global careers.',
        descriptionAr: 'تقديم تعليم عالمي المستوى يلبي المعايير الدولية ويعد الطلاب للمهن العالمية.',
        icon: 'pi pi-star',
        order: 1
      },
      {
        id: 'goal-2',
        title: 'Research Innovation',
        titleAr: 'الابتكار البحثي',
        description: 'Foster cutting-edge research that contributes to scientific advancement and societal development.',
        descriptionAr: 'تعزيز البحث المتطور الذي يساهم في التقدم العلمي والتنمية المجتمعية.',
        icon: 'pi pi-lightbulb',
        order: 2
      },
      {
        id: 'goal-3',
        title: 'Community Engagement',
        titleAr: 'المشاركة المجتمعية',
        description: 'Build strong partnerships with local and international communities to address real-world challenges.',
        descriptionAr: 'بناء شراكات قوية مع المجتمعات المحلية والدولية لمواجهة التحديات الواقعية.',
        icon: 'pi pi-users',
        order: 3
      },
      {
        id: 'goal-4',
        title: 'Sustainable Development',
        titleAr: 'التنمية المستدامة',
        description: 'Promote environmental responsibility and sustainable practices in all university operations.',
        descriptionAr: 'تعزيز المسؤولية البيئية والممارسات المستدامة في جميع عمليات الجامعة.',
        icon: 'pi pi-globe',
        order: 4
      }
    ]
  };

  getGoalsSection(): GoalsSection {
    return this.goalsSection;
  }

  getGoals(): UniversityGoal[] {
    return this.goalsSection.goals.sort((a, b) => a.order - b.order);
  }

  getGoalById(id: string): UniversityGoal | undefined {
    return this.goalsSection.goals.find(goal => goal.id === id);
  }
}