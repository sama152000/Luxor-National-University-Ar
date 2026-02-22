import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Staff } from '../model/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private staff: Staff[] = [
    // Engineering Faculty Staff (Faculty ID: 1)
    {
      id: 1,
      facultyId: 1,
      name: 'د. أحمد محمد الخالدي',
      position: 'عميد الكلية',
      image: 'https://images.pexels.com/photos/5212317/pexels-photo-5212317.jpeg',
      email: 'dean.eng@university.edu.sa',
      phone: '+966-11-1234567',
      office: 'مكتب العميد - الدور الثالث',
      biography: `
        د. أحمد محمد الخالدي حاصل على درجة الدكتوراه في الهندسة المدنية من جامعة كامبريدج عام 1995. 
        يتمتع بخبرة أكاديمية وعملية تزيد عن 25 عاماً في مجال الهندسة الإنشائية والتصميم الهندسي.
        
        شغل عدة مناصب أكاديمية وإدارية مهمة، وله أكثر من 80 بحثاً منشوراً في مجلات علمية محكمة.
        حصل على عدة جوائز للتميز في التدريس والبحث العلمي.
      `,
      qualifications: [
        'دكتوراه في الهندسة المدنية - جامعة كامبريدج (1995)',
        'ماجستير في الهندسة الإنشائية - جامعة أكسفورد (1990)',
        'بكالوريوس في الهندسة المدنية - جامعة الملك سعود (1988)'
      ],
      specializations: [
        'الهندسة الإنشائية',
        'تصميم المنشآت الخرسانية',
        'ديناميكا المنشآت',
        'الهندسة الزلزالية'
      ],
      researchInterests: [
        'تطوير مواد البناء المستدامة',
        'التصميم المقاوم للزلازل',
        'الذكاء الاصطناعي في الهندسة المدنية',
        'إدارة المشاريع الهندسية'
      ],
      publications: [
        'Seismic Design of High-Rise Buildings (2020)',
        'Sustainable Construction Materials (2019)',
        'AI Applications in Civil Engineering (2021)'
      ],
      isDean: true,
      joinDate: new Date('2000-09-01')
    },
    {
      id: 2,
      facultyId: 1,
      name: 'د. فاطمة عبدالله النمر',
      position: 'أستاذ الهندسة الكهربائية',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg',
      email: 'fatima.alnamir@university.edu.sa',
      phone: '+966-11-1234568',
      office: 'مكتب 205 - قسم الهندسة الكهربائية',
      biography: `
        د. فاطمة عبدالله النمر أستاذ متميز في قسم الهندسة الكهربائية، متخصصة في هندسة القوى الكهربائية والطاقة المتجددة.
        حاصلة على درجة الدكتوراه من معهد ماساتشوستس للتكنولوجيا (MIT) عام 1998.
        
        لها إسهامات بحثية مهمة في مجال الطاقة المتجددة وأنظمة الطاقة الذكية.
        تشرف على أكثر من 15 طالب دكتوراه وماجستير.
      `,
      qualifications: [
        'دكتوراه في الهندسة الكهربائية - MIT (1998)',
        'ماجستير في هندسة القوى - جامعة ستانفورد (1994)',
        'بكالوريوس في الهندسة الكهربائية - جامعة الملك فهد (1992)'
      ],
      specializations: [
        'هندسة القوى الكهربائية',
        'الطاقة المتجددة',
        'أنظمة الطاقة الذكية',
        'كفاءة الطاقة'
      ],
      researchInterests: [
        'تكامل الطاقة المتجددة في الشبكات الكهربائية',
        'أنظمة التخزين للطاقة',
        'الشبكات الذكية',
        'تحليل استقرار أنظمة القوى'
      ],
      publications: [
        'Smart Grid Integration of Renewable Energy (2021)',
        'Energy Storage Systems for Power Grids (2020)',
        'Solar Power System Design (2019)'
      ],
      isDean: false,
      joinDate: new Date('2002-02-01')
    },
    {
      id: 3,
      facultyId: 1,
      name: 'د. محمد سالم الأحمد',
      position: 'أستاذ مشارك - الهندسة الميكانيكية',
      image: 'https://images.pexels.com/photos/5212350/pexels-photo-5212350.jpeg',
      email: 'mohammed.alahmad@university.edu.sa',
      phone: '+966-11-1234569',
      office: 'مكتب 310 - قسم الهندسة الميكانيكية',
      biography: `
        د. محمد سالم الأحمد أستاذ مشارك في قسم الهندسة الميكانيكية، متخصص في الديناميكا الحرارية وتقنيات التصنيع.
        حاصل على درجة الدكتوراه من جامعة ميشيغان عام 2005.
        
        له خبرة واسعة في الصناعة والأكاديميا، وقد عمل كمستشار لعدة شركات صناعية كبرى.
        يركز في أبحاثه على تطوير تقنيات التصنيع المستدامة.
      `,
      qualifications: [
        'دكتوراه في الهندسة الميكانيكية - جامعة ميشيغان (2005)',
        'ماجستير في هندسة التصنيع - جامعة بيردو (2001)',
        'بكالوريوس في الهندسة الميكانيكية - جامعة الملك سعود (1999)'
      ],
      specializations: [
        'الديناميكا الحرارية',
        'تقنيات التصنيع',
        'التصميم الميكانيكي',
        'الطاقة والبيئة'
      ],
      researchInterests: [
        'التصنيع المستدام',
        'تقنيات التصنيع المتقدمة',
        'كفاءة الطاقة في الصناعة',
        'التصميم الأخضر'
      ],
      isDean: false,
      joinDate: new Date('2008-09-01')
    },

    // Medicine Faculty Staff (Faculty ID: 2)
    {
      id: 4,
      facultyId: 2,
      name: 'د. فاطمة عبدالله السالم',
      position: 'عميدة الكلية',
      image: 'https://images.pexels.com/photos/5327921/pexels-photo-5327921.jpeg',
      email: 'dean.med@university.edu.sa',
      phone: '+966-11-2345678',
      office: 'مكتب العميدة - المجمع الطبي',
      biography: `
        د. فاطمة عبدالله السالم طبيبة وأكاديمية متميزة، حاصلة على درجة الدكتوراه في الطب الباطني من جامعة هارفارد عام 1992.
        تتمتع بخبرة طبية وأكاديمية تزيد عن 30 عاماً في مجال الطب الباطني وأمراض القلب.
        
        شغلت عدة مناصب قيادية في المجال الطبي والأكاديمي، ولها إسهامات بحثية مهمة في مجال أمراض القلب.
        حصلت على عدة جوائز للتميز في الطب والتدريس.
      `,
      qualifications: [
        'دكتوراه في الطب - جامعة هارفارد (1992)',
        'زمالة في أمراض القلب - مستشفى مايو كلينك (1995)',
        'إقامة في الطب الباطني - مستشفى جونز هوبكنز (1993)',
        'بكالوريوس الطب والجراحة - جامعة الملك سعود (1988)'
      ],
      specializations: [
        'الطب الباطني',
        'أمراض القلب والأوعية الدموية',
        'طب الطوارئ القلبية',
        'الطب الوقائي'
      ],
      researchInterests: [
        'أمراض القلب التاجية',
        'الوقاية من أمراض القلب',
        'طب القلب النسائي',
        'التدخلات القلبية غير الجراحية'
      ],
      publications: [
        'Women and Heart Disease: Prevention Strategies (2020)',
        'Cardiac Emergency Medicine (2019)',
        'Preventive Cardiology in Practice (2021)'
      ],
      isDean: true,
      joinDate: new Date('1998-08-01')
    },
    {
      id: 5,
      facultyId: 2,
      name: 'د. عبدالعزيز محمد الراشد',
      position: 'أستاذ الجراحة العامة',
      image: 'https://images.pexels.com/photos/5327925/pexels-photo-5327925.jpeg',
      email: 'abdulaziz.alrashed@university.edu.sa',
      phone: '+966-11-2345679',
      office: 'مكتب 405 - قسم الجراحة',
      biography: `
        د. عبدالعزيز محمد الراشد جراح متميز وأستاذ في قسم الجراحة العامة، متخصص في جراحة الأورام والجراحة بالمنظار.
        حاصل على درجة الدكتوراه من جامعة جونز هوبكنز عام 2000.
        
        له خبرة واسعة في الجراحة المتقدمة وقد أجرى آلاف العمليات الجراحية الناجحة.
        يعتبر من الرواد في مجال الجراحة بالمنظار في المنطقة.
      `,
      qualifications: [
        'دكتوراه في الجراحة العامة - جامعة جونز هوبكنز (2000)',
        'زمالة في جراحة الأورام - مركز أندرسون للسرطان (2002)',
        'إقامة في الجراحة العامة - مستشفى كليفلاند كلينك (1998)',
        'بكالوريوس الطب والجراحة - جامعة الملك عبدالعزيز (1994)'
      ],
      specializations: [
        'الجراحة العامة',
        'جراحة الأورام',
        'الجراحة بالمنظار',
        'جراحة الجهاز الهضمي'
      ],
      researchInterests: [
        'تقنيات الجراحة المتقدمة',
        'جراحة الأورام الدقيقة',
        'الجراحة الروبوتية',
        'تطوير أدوات جراحية جديدة'
      ],
      publications: [
        'Advanced Laparoscopic Surgery Techniques (2021)',
        'Oncological Surgery: Modern Approaches (2020)',
        'Minimally Invasive Surgery (2019)'
      ],
      isDean: false,
      joinDate: new Date('2005-01-01')
    },

    // Business Faculty Staff (Faculty ID: 3)
    {
      id: 6,
      facultyId: 3,
      name: 'د. خالد عبدالعزيز النمر',
      position: 'عميد الكلية',
      image: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      email: 'dean.business@university.edu.sa',
      phone: '+966-11-3456789',
      office: 'مكتب العميد - مبنى إدارة الأعمال',
      biography: `
        د. خالد عبدالعزيز النمر خبير في إدارة الأعمال والاستراتيجية، حاصل على درجة الدكتوراه من كلية وارتون للأعمال عام 1996.
        يتمتع بخبرة أكاديمية وعملية تزيد عن 25 عاماً في مجال إدارة الأعمال والاستشارات الإدارية.
        
        عمل كمستشار لعدة شركات كبرى ومؤسسات حكومية، وله إسهامات مهمة في تطوير الأعمال وريادة الأعمال.
        حصل على عدة جوائز للتميز في التدريس والاستشارات الإدارية.
      `,
      qualifications: [
        'دكتوراه في إدارة الأعمال - كلية وارتون (1996)',
        'ماجستير في الإدارة الاستراتيجية - كلية هارفارد للأعمال (1992)',
        'بكالوريوس في إدارة الأعمال - جامعة الملك سعود (1990)'
      ],
      specializations: [
        'الإدارة الاستراتيجية',
        'ريادة الأعمال',
        'إدارة التغيير',
        'القيادة التنظيمية'
      ],
      researchInterests: [
        'استراتيجيات الأعمال في العصر الرقمي',
        'ريادة الأعمال والابتكار',
        'إدارة التحول الرقمي',
        'القيادة في بيئة الأعمال المتغيرة'
      ],
      publications: [
        'Digital Business Strategy (2021)',
        'Entrepreneurship in the Digital Age (2020)',
        'Leadership and Change Management (2019)'
      ],
      isDean: true,
      joinDate: new Date('2001-09-01')
    },
    {
      id: 7,
      facultyId: 3,
      name: 'د. نورا أحمد الزهراني',
      position: 'أستاذ التسويق',
      image: 'https://images.pexels.com/photos/3760265/pexels-photo-3760265.jpeg',
      email: 'nora.alzahrani@university.edu.sa',
      phone: '+966-11-3456790',
      office: 'مكتب 220 - قسم التسويق',
      biography: `
        د. نورا أحمد الزهراني أستاذ متميز في قسم التسويق، متخصصة في التسويق الرقمي وسلوك المستهلك.
        حاصلة على درجة الدكتوراه من جامعة نورث وسترن عام 2003.
        
        لها خبرة واسعة في مجال التسويق الرقمي والتجارة الإلكترونية، وتعمل كمستشارة لعدة شركات في هذا المجال.
        تركز في أبحاثها على تأثير التكنولوجيا على سلوك المستهلك.
      `,
      qualifications: [
        'دكتوراه في التسويق - جامعة نورث وسترن (2003)',
        'ماجستير في إدارة الأعمال - جامعة شيكاغو (1999)',
        'بكالوريوس في إدارة الأعمال - جامعة الملك عبدالعزيز (1997)'
      ],
      specializations: [
        'التسويق الرقمي',
        'سلوك المستهلك',
        'التجارة الإلكترونية',
        'إدارة العلامة التجارية'
      ],
      researchInterests: [
        'تأثير وسائل التواصل الاجتماعي على سلوك المستهلك',
        'التسويق عبر المنصات الرقمية',
        'تجربة العملاء الرقمية',
        'التسويق بالذكاء الاصطناعي'
      ],
      publications: [
        'Digital Marketing in the Social Media Era (2021)',
        'Consumer Behavior in E-commerce (2020)',
        'Brand Management in Digital Age (2019)'
      ],
      isDean: false,
      joinDate: new Date('2006-02-01')
    },

    // Computer Science Faculty Staff (Faculty ID: 4)
    {
      id: 8,
      facultyId: 4,
      name: 'د. سارة محمد الأحمد',
      position: 'عميدة الكلية',
      image: 'https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg',
      email: 'dean.cs@university.edu.sa',
      phone: '+966-11-4567890',
      office: 'مكتب العميدة - مبنى التقنية',
      biography: `
        د. سارة محمد الأحمد رائدة في مجال علوم الحاسب والذكاء الاصطناعي، حاصلة على درجة الدكتوراه من جامعة ستانفورد عام 1999.
        تتمتع بخبرة أكاديمية وبحثية تزيد عن 22 عاماً في مجال علوم الحاسب والتقنية.
        
        لها إسهامات بحثية مهمة في مجال الذكاء الاصطناعي والتعلم الآلي، وقد نشرت أكثر من 100 بحث علمي.
        تعتبر من الرائدات في مجال التقنية في المنطقة.
      `,
      qualifications: [
        'دكتوراه في علوم الحاسب - جامعة ستانفورد (1999)',
        'ماجستير في الذكاء الاصطناعي - MIT (1995)',
        'بكالوريوس في علوم الحاسب - جامعة الملك فهد (1993)'
      ],
      specializations: [
        'الذكاء الاصطناعي',
        'التعلم الآلي',
        'معالجة اللغات الطبيعية',
        'الرؤية الحاسوبية'
      ],
      researchInterests: [
        'تطبيقات الذكاء الاصطناعي في الطب',
        'التعلم العميق للغة العربية',
        'أنظمة التوصية الذكية',
        'أخلاقيات الذكاء الاصطناعي'
      ],
      publications: [
        'AI Applications in Healthcare (2021)',
        'Deep Learning for Arabic Language Processing (2020)',
        'Ethics in Artificial Intelligence (2019)'
      ],
      isDean: true,
      joinDate: new Date('2003-09-01')
    },
    {
      id: 9,
      facultyId: 4,
      name: 'د. عبدالله سالم المطيري',
      position: 'أستاذ أمن المعلومات',
      image: 'https://images.pexels.com/photos/3861970/pexels-photo-3861970.jpeg',
      email: 'abdullah.almutairi@university.edu.sa',
      phone: '+966-11-4567891',
      office: 'مكتب 315 - قسم أمن المعلومات',
      biography: `
        د. عبدالله سالم المطيري خبير في أمن المعلومات والأمن السيبراني، حاصل على درجة الدكتوراه من جامعة كارنيجي ميلون عام 2005.
        يتمتع بخبرة واسعة في مجال الأمن السيبراني والتشفير، وقد عمل كمستشار لعدة مؤسسات حكومية وخاصة.
        
        له إسهامات مهمة في تطوير أنظمة الأمان الرقمية وحماية البيانات.
        يعتبر من الخبراء المعترف بهم في مجال الأمن السيبراني في المنطقة.
      `,
      qualifications: [
        'دكتوراه في أمن المعلومات - جامعة كارنيجي ميلون (2005)',
        'ماجستير في الأمن السيبراني - جامعة جورج واشنطن (2001)',
        'بكالوريوس في علوم الحاسب - جامعة الملك سعود (1999)'
      ],
      specializations: [
        'الأمن السيبراني',
        'التشفير وأمان البيانات',
        'أمن الشبكات',
        'الطب الشرعي الرقمي'
      ],
      researchInterests: [
        'تطوير خوارزميات التشفير المتقدمة',
        'أمان إنترنت الأشياء',
        'الذكاء الاصطناعي في الأمن السيبراني',
        'حماية الخصوصية الرقمية'
      ],
      publications: [
        'Advanced Cryptography Techniques (2021)',
        'IoT Security Challenges (2020)',
        'AI in Cybersecurity (2019)'
      ],
      isDean: false,
      joinDate: new Date('2008-01-01')
    },

    // Science Faculty Staff (Faculty ID: 5)
    {
      id: 10,
      facultyId: 5,
      name: 'د. عبدالرحمن صالح المطيري',
      position: 'عميد الكلية',
      image: 'https://images.pexels.com/photos/2280549/pexels-photo-2280549.jpeg',
      email: 'dean.science@university.edu.sa',
      phone: '+966-11-5678901',
      office: 'مكتب العميد - مبنى العلوم',
      biography: `
        د. عبدالرحمن صالح المطيري عالم رياضيات متميز، حاصل على درجة الدكتوراه من جامعة كامبريدج عام 1994.
        يتمتع بخبرة أكاديمية وبحثية تزيد عن 27 عاماً في مجال الرياضيات البحتة والتطبيقية.
        
        له إسهامات بحثية مهمة في مجال التحليل الرياضي ونظرية الأعداد، وقد نشر أكثر من 90 بحثاً علمياً.
        حصل على عدة جوائز دولية في الرياضيات.
      `,
      qualifications: [
        'دكتوراه في الرياضيات - جامعة كامبريدج (1994)',
        'ماجستير في الرياضيات البحتة - جامعة أكسفورد (1990)',
        'بكالوريوس في الرياضيات - جامعة الملك سعود (1988)'
      ],
      specializations: [
        'التحليل الرياضي',
        'نظرية الأعداد',
        'الجبر المجرد',
        'الرياضيات التطبيقية'
      ],
      researchInterests: [
        'نظرية الأعداد التحليلية',
        'التحليل الدالي',
        'الرياضيات الحاسوبية',
        'تطبيقات الرياضيات في العلوم'
      ],
      publications: [
        'Advanced Number Theory (2020)',
        'Functional Analysis Applications (2019)',
        'Computational Mathematics (2021)'
      ],
      isDean: true,
      joinDate: new Date('1997-09-01')
    },
    {
      id: 11,
      facultyId: 5,
      name: 'د. مريم خالد الأحمد',
      position: 'أستاذ الكيمياء',
      image: 'https://images.pexels.com/photos/2280550/pexels-photo-2280550.jpeg',
      email: 'mariam.alahmad@university.edu.sa',
      phone: '+966-11-5678902',
      office: 'مكتب 210 - قسم الكيمياء',
      biography: `
        د. مريم خالد الأحمد عالمة كيمياء متميزة، متخصصة في الكيمياء العضوية والكيمياء الطبية.
        حاصلة على درجة الدكتوراه من جامعة هارفارد عام 2002.
        
        لها إسهامات بحثية مهمة في تطوير مركبات دوائية جديدة وتطبيقات النانوتكنولوجي في الطب.
        تشرف على عدة مشاريع بحثية متقدمة في مجال الكيمياء الطبية.
      `,
      qualifications: [
        'دكتوراه في الكيمياء العضوية - جامعة هارفارد (2002)',
        'ماجستير في الكيمياء الطبية - جامعة كاليفورنيا (1998)',
        'بكالوريوس في الكيمياء - جامعة الملك عبدالعزيز (1996)'
      ],
      specializations: [
        'الكيمياء العضوية',
        'الكيمياء الطبية',
        'النانوتكنولوجي',
        'تطوير الأدوية'
      ],
      researchInterests: [
        'تصميم وتطوير مركبات دوائية جديدة',
        'تطبيقات النانوتكنولوجي في الطب',
        'الكيمياء الخضراء',
        'المحفزات الحيوية'
      ],
      publications: [
        'Drug Design and Development (2021)',
        'Nanotechnology in Medicine (2020)',
        'Green Chemistry Applications (2019)'
      ],
      isDean: false,
      joinDate: new Date('2005-02-01')
    }
  ];

  getStaffByFacultyId(facultyId: number): Observable<Staff[]> {
    const facultyStaff = this.staff.filter(member => member.facultyId === facultyId);
    // Sort to put dean first
    facultyStaff.sort((a, b) => {
      if (a.isDean && !b.isDean) return -1;
      if (!a.isDean && b.isDean) return 1;
      return 0;
    });
    return of(facultyStaff);
  }

  getStaffById(id: number): Observable<Staff | undefined> {
    const staffMember = this.staff.find(s => s.id === id);
    return of(staffMember);
  }

  getAllStaff(): Observable<Staff[]> {
    return of(this.staff);
  }
}