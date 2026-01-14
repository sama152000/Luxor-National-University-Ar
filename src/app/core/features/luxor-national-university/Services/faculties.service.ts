import { Injectable } from '@angular/core';
import { Faculty, FacultiesSection } from '../model/faculties.model';

@Injectable({
  providedIn: 'root'
})
export class FacultiesService {
  private facultiesSection: FacultiesSection = {
    title: 'Our Faculties',
    titleAr: 'كلياتنا',
    subtitle: 'Diverse Academic Excellence',
    subtitleAr: 'تميز أكاديمي متنوع',
    backgroundImage: './assets/cover.png',
    faculties: [
      {
        id: 'faculty-1',
        name: 'Faculty of Engineering',
        nameAr: 'كلية الفنون والتصميم',
        description: 'Leading innovation in engineering education and research',
        descriptionAr: 'رائدة في الابتكار في التعليم والبحث الهندسي',
        image: './assets/f1.jpg',
        backgroundImage: 'https://images.pexels.com/photos/3862132/pexels-photo-3862132.jpeg?auto=compress&cs=tinysrgb&w=800',
        dean: 'Prof. Ahmed Hassan',
        deanAr: 'أ.د. أحمد حسن',
        establishedYear: 2016,
        studentsCount: 1200,
        programsCount: 8,
        slug: 'engineering',
        departments: [
          'Civil Engineering',
          'Mechanical Engineering',
          'Electrical Engineering',
          'Computer Engineering',
          'Chemical Engineering'
        ],
        departmentsAr: [
          'الهندسة المدنية',
          'الهندسة الميكانيكية',
          'الهندسة الكهربائية',
          'هندسة الحاسوب',
          'الهندسة الكيميائية'
        ]
      },
      {
        id: 'faculty-2',
        name: 'Faculty of Medicine',
        nameAr: 'كلية اللغات والترجمة',
        description: 'Excellence in medical education and healthcare innovation',
        descriptionAr: 'التميز في التعليم الطبي وابتكار الرعاية الصحية',
        image: './assets/f2.jpg',
        backgroundImage: 'https://images.pexels.com/photos/4021775/pexels-photo-4021775.jpeg?auto=compress&cs=tinysrgb&w=800',
        dean: 'Prof. Fatima Nasser',
        deanAr: 'أ.د. فاطمة ناصر',
        establishedYear: 2017,
        studentsCount: 800,
        programsCount: 6,
        slug: 'medicine',
        departments: [
          'General Medicine',
          'Surgery',
          'Pediatrics',
          'Internal Medicine',
          'Radiology'
        ],
        departmentsAr: [
          'الطب العام',
          'الجراحة',
          'طب الأطفال',
          'الطب الباطني',
          'الأشعة'
        ]
      },
      {
        id: 'faculty-3',
        name: 'Faculty of Business Administration',
        nameAr: 'كلية الحاسبات والمعلومات',
        description: 'Shaping future business leaders and entrepreneurs',
        descriptionAr: 'تشكيل قادة الأعمال ورجال الأعمال في المستقبل',
        image: './assets/f3.jpg',
        backgroundImage: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800',
        dean: 'Prof. Omar Ali',
        deanAr: 'أ.د. عمر علي',
        establishedYear: 2015,
        studentsCount: 950,
        programsCount: 7,
        slug: 'business',
        departments: [
          'Management',
          'Marketing',
          'Finance',
          'Human Resources',
          'International Business'
        ],
        departmentsAr: [
          'الإدارة',
          'التسويق',
          'المالية',
          'الموارد البشرية',
          'الأعمال الدولية'
        ]
      },
      {
        id: 'faculty-4',
        name: 'Faculty of Computer Science',
        nameAr: 'كلية  السياحة والاثار',
        description: 'Advancing technology and digital innovation',
        descriptionAr: 'تطوير التكنولوجيا والابتكار الرقمي',
        image: './assets/f4.jpg',
        backgroundImage: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800',
        dean: 'Prof. Sarah Mohamed',
        deanAr: 'أ.د. سارة محمد',
        establishedYear: 2016,
        studentsCount: 750,
        programsCount: 5,
        slug: 'computer-science',
        departments: [
          'Software Engineering',
          'Artificial Intelligence',
          'Cybersecurity',
          'Data Science',
          'Information Systems'
        ],
        departmentsAr: [
          'هندسة البرمجيات',
          'الذكاء الاصطناعي',
          'الأمن السيبراني',
          'علوم البيانات',
          'نظم المعلومات'
        ]
      },
      
     
    ]
  };

  getFacultiesSection(): FacultiesSection {
    return this.facultiesSection;
  }

  getAllFaculties(): Faculty[] {
    return this.facultiesSection.faculties;
  }

  getFacultyById(id: string): Faculty | undefined {
    return this.facultiesSection.faculties.find(faculty => faculty.id === id);
  }

  getFacultyBySlug(slug: string): Faculty | undefined {
    return this.facultiesSection.faculties.find(faculty => faculty.slug === slug);
  }

  getFacultiesByEstablishedYear(year: number): Faculty[] {
    return this.facultiesSection.faculties.filter(faculty => faculty.establishedYear === year);
  }

  getTotalStudents(): number {
    return this.facultiesSection.faculties.reduce((total, faculty) => total + faculty.studentsCount, 0);
  }

  getTotalPrograms(): number {
    return this.facultiesSection.faculties.reduce((total, faculty) => total + faculty.programsCount, 0);
  }
}