import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Faculty, FacultySearchFilter } from '../model/faculty.model';

@Injectable({
  providedIn: 'root'
})
export class FacultyService {
  private faculties: Faculty[] = [
    {
      id: 1,
      name: 'كلية اللغات والترجمة والعلوم الإنسانية',
      shortDescription: 'برامج متميزة في تعليم اللغات والترجمة.',
      fullDescription: 'تقدم الكلية برامج متعددة في اللغات والترجمة والعلوم الإنسانية.',
      images: ['./assets/f2.jpg'],
      mainImage: './assets/f2.jpg',
      dean: 'د. محمد عبدالسلام',
      establishedYear: 2025,
      studentsCount: 1200,
      staffCount: 80,
      programsCount: 5,
      location: 'مدينة طيبة الجديدة - الأقصر',
      contact: {
        phone: '+20-95-123456',
        email: 'languages@luxor.edu.eg',
        website: 'languages.luxor.edu.eg'
      },
      about: {
        overview: `<p>تقدم الكلية برامج متميزة في تعليم اللغات والترجمة والعلوم الإنسانية.</p>`,
        vision: `<p>أن تكون رائدة في تعليم اللغات والترجمة على مستوى مصر.</p>`,
        mission: `<p>تزويد الطلاب بالمهارات اللغوية والمعرفية اللازمة لسوق العمل.</p>`,
        goals: `<ul><li>تخريج مترجمين محترفين</li><li>تعزيز البحث العلمي</li></ul>`,
        history: `<p>تأسست الكلية عام 2025 مع بداية جامعة الأقصر الأهلية.</p>`,
        details: `<p>البرامج: الإنجليزية، الألمانية، الإسبانية، الفرنسية، العربية للناطقين بغيرها.</p>`,
        location: {
          phone: '+20-95-123456',
          email: 'languages@luxor.edu.eg',
          website: 'languages.luxor.edu.eg'
        }
      }
    },
    {
      id: 2,
      name: 'كلية الحاسبات والمعلومات والذكاء الاصطناعي',
      shortDescription: 'برامج حديثة في علوم الحاسب والذكاء الاصطناعي.',
      fullDescription: 'تقدم الكلية برامج متطورة في الذكاء الاصطناعي والأمن السيبراني.',
      images: ['./assets/f3.jpg'],
      mainImage: './assets/f3.jpg',
      dean: 'د. أحمد علي',
      establishedYear: 2025,
      studentsCount: 900,
      staffCount: 60,
      programsCount: 2,
      location: 'مدينة طيبة الجديدة - الأقصر',
      contact: {
        phone: '+20-95-654321',
        email: 'cs@luxor.edu.eg',
        website: 'cs.luxor.edu.eg'
      },
      about: {
        overview: `<p>تقدم الكلية برامج متطورة في علوم الحاسب والذكاء الاصطناعي.</p>`,
        vision: `<p>أن تكون رائدة في مجال الذكاء الاصطناعي والأمن السيبراني.</p>`,
        mission: `<p>إعداد كوادر تقنية قادرة على المنافسة في سوق العمل.</p>`,
        goals: `<ul><li>تخريج متخصصين في الذكاء الاصطناعي</li><li>تعزيز الأمن السيبراني</li></ul>`,
        history: `<p>تأسست الكلية عام 2025 ضمن جامعة الأقصر الأهلية.</p>`,
        details: `<p>البرامج: الذكاء الاصطناعي، الأمن السيبراني.</p>`,
        location: {
          phone: '+20-95-654321',
          email: 'cs@luxor.edu.eg',
          website: 'cs.luxor.edu.eg'
        }
      }
    },
    {
      id: 3,
      name: 'كلية الفنون والتصميم',
      shortDescription: 'برامج إبداعية في الفنون والتصميم.',
      fullDescription: 'تقدم الكلية برامج في العمارة الداخلية، التصميم الجرافيكي، تصميم الأزياء.',
      images: ['./assets/f1.jpg'],
      mainImage: './assets/f1.jpg',
      dean: 'د. سارة محمود',
      establishedYear: 2025,
      studentsCount: 700,
      staffCount: 40,
      programsCount: 3,
      location: 'مدينة طيبة الجديدة - الأقصر',
      contact: {
        phone: '+20-95-777777',
        email: 'arts@luxor.edu.eg',
        website: 'arts.luxor.edu.eg'
      },
      about: {
        overview: `<p>تقدم الكلية برامج إبداعية في الفنون والتصميم.</p>`,
        vision: `<p>أن تكون مركزاً للابتكار والإبداع الفني.</p>`,
        mission: `<p>إعداد مصممين وفنانين قادرين على المنافسة محلياً ودولياً.</p>`,
        goals: `<ul><li>تطوير المواهب الفنية</li><li>تعزيز الابتكار</li></ul>`,
        history: `<p>تأسست الكلية عام 2025 ضمن جامعة الأقصر الأهلية.</p>`,
        details: `<p>البرامج: العمارة الداخلية، التصميم الجرافيكي وفنون الميديا، تصميم الأزياء والموضة.</p>`,
        location: {
          phone: '+20-95-777777',
          email: 'arts@luxor.edu.eg',
          website: 'arts.luxor.edu.eg'
        }
      }
    },
    {
      id: 4,
      name: 'كلية السياحة والآثار',
      shortDescription: 'برامج متخصصة في السياحة والآثار وإدارة التراث.',
      fullDescription: 'تقدم الكلية برامج في ترميم التراث، الإرشاد السياحي، إدارة الضيافة.',
      images: ['./assets/f4.jpg'],
      mainImage: './assets/f4.jpg',
      dean: 'د. يوسف حسن',
      establishedYear: 2025,
      studentsCount: 800,
      staffCount: 50,
      programsCount: 5,
      location: 'مدينة طيبة الجديدة - الأقصر',
      contact: {
        phone: '+20-95-888888',
        email: 'tourism@luxor.edu.eg',
        website: 'tourism.luxor.edu.eg'
      },
      about: {
        overview: `<p>تقدم الكلية برامج متخصصة في السياحة والآثار.</p>`,
        vision: `<p>أن تكون رائدة في مجال السياحة وإدارة التراث الحضاري.</p>`,
        mission: `<p>إعداد كوادر متميزة في السياحة والآثار.</p>`,
        goals: `<ul><li>تعزيز السياحة المستدامة</li><li>الحفاظ على التراث</li></ul>`,
        history: `<p>تأسست الكلية عام 2025 ضمن جامعة الأقصر الأهلية.</p>`,
        details: `<p>البرامج: ترميم التراث والعمارة الأثرية، الإرشاد السياحي وإدارة التراث الحضاري، إدارة المطارات وخدمات الضيافة الجوية، إدارة ضيافة المستشفيات والمنتجعات الصحية، إدارة النوادي والسياحة الرياضية.</p>`,
        location: {
          phone: '+20-95-888888',
          email: 'tourism@luxor.edu.eg',
          website: 'tourism.luxor.edu.eg'
        }
      }
    }
  ];

  getAllFaculties(): Observable<Faculty[]> {
    return of(this.faculties);
  }

  getFacultyById(id: number): Observable<Faculty | undefined> {
    const faculty = this.faculties.find(f => f.id === id);
    return of(faculty);
  }

  searchFaculties(filter: FacultySearchFilter): Observable<Faculty[]> {
    let filtered = [...this.faculties];

    if (filter.searchText) {
      const searchTerm = filter.searchText.toLowerCase();
      filtered = filtered.filter(faculty =>
        faculty.name.toLowerCase().includes(searchTerm) ||
        (faculty.shortDescription && faculty.shortDescription.toLowerCase().includes(searchTerm))
      );
    }

    if (filter.alphabetFilter && filter.alphabetFilter !== 'الكل') {
      filtered = filtered.filter(faculty =>
        faculty.name.startsWith(filter.alphabetFilter!)
      );
    }

    return of(filtered);
  }

  getAlphabetLetters(): string[] {
    const letters = new Set<string>();
    this.faculties.forEach(faculty => {
      const firstLetter = faculty.name.charAt(0);
      letters.add(firstLetter);
    });
    return ['الكل', ...Array.from(letters).sort()];
  }
}
