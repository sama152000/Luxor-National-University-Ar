import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { NewsSection,NewsItem, NewsCategory } from '../model/news.model';

@Injectable({
  providedIn: 'root'
})
export class NewsService {

  constructor() {}

  getNewsSection(): NewsSection {
    return {
      id: '1',
      title: 'أحدث الأخبار',
      articles: [
        {
          id: '1',
          title: 'جامعة الأقصر الوطنية تطلق مركز أبحاث جديد',
          excerpt: 'افتتحت جامعة الأقصر الوطنية مركز أبحاث متقدم جديد لدعم الابتكار والاستدامة والتميز العلمي عبر تخصصات متعددة.',
          image: './assets/pic2.jpg',
          category: 'عاجل',
          date: '15 أكتوبر 2025',
          link: '/news/research-center-launch',
          featured: true
        },
        {
          id: '2',
          title: 'المؤتمر الدولي حول تغير المناخ',
          image: './assets/pic1.jpg',
          category: 'فعاليات',
          date: '10 أكتوبر 2025',
          link: '/news/climate-conference',
          featured: false
        },
        {
          id: '3',
          title: 'طلاب يفوزون بجائزة الابتكار الوطنية',
          image: './assets/pic3.jpg',
          category: 'إنجاز',
          date: '28 سبتمبر 2025',
          link: '/news/innovation-award',
          featured: false
        },
        {
          id: '4',
          title: 'كلية العلوم تحصل على اعتماد دولي',
          image: './assets/pic4.jpg',
          category: 'أكاديمي',
          date: '18 سبتمبر 2025',
          link: '/news/science-accreditation',
          featured: false
        }
      ]
    };
  }


   private newsData: NewsItem[] = [
    {
      id: 1,
      title: 'افتتاح مركز التميز للذكاء الاصطناعي',
      shortDescription: 'افتتحت الجامعة مركز التميز الجديد للذكاء الاصطناعي والتعلم الآلي بحضور كبار المسؤولين وخبراء التكنولوجيا.',
      fullContent: `
        <p>في خطوة مهمة نحو التطوير التكنولوجي، افتتحت جامعتنا مركز التميز للذكاء الاصطناعي والتعلم الآلي، والذي يعد من أحدث المراكز في المنطقة المتخصصة في هذا المجال الحيوي.</p>
        
        <p>يضم المركز أحدث الأجهزة والتقنيات المتطورة، بما في ذلك أجهزة الحاسوب عالية الأداء ومختبرات متخصصة في التعلم الآلي والروبوتات. كما يحتوي على قاعات تدريبية مجهزة بأحدث وسائل التعليم التفاعلي.</p>
        
        <p>وقد حضر حفل الافتتاح معالي وزير التعليم ورؤساء الجامعات وعدد من الخبراء المتخصصين في مجال الذكاء الاصطناعي من داخل المملكة وخارجها. وألقى مدير الجامعة كلمة أشاد فيها بأهمية هذا المشروع في خدمة التنمية التكنولوجية.</p>
        
        <p>يهدف المركز إلى تقديم برامج تدريبية متخصصة، وإجراء بحوث متقدمة في مجال الذكاء الاصطناعي، بالإضافة إلى تقديم الاستشارات للقطاعين الحكومي والخاص في هذا المجال الواعد.</p>
      `,
      date: new Date('2024-01-15'),
      category: 'أخبار',
      images: [
        'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
        'https://images.pexels.com/photos/8386435/pexels-photo-8386435.jpeg',
        'https://images.pexels.com/photos/8386436/pexels-photo-8386436.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/8386434/pexels-photo-8386434.jpeg',
      author: 'إدارة العلاقات العامة',
      tags: ['ذكاء اصطناعي', 'تكنولوجيا', 'افتتاح'],
      relatedNews: [2, 3, 4]
    },
    {
      id: 2,
      title: 'فوز طلاب الجامعة بالمركز الأول في مسابقة البرمجة الدولية',
      shortDescription: 'حقق فريق الجامعة إنجازاً مميزاً بحصوله على المركز الأول في المسابقة الدولية للبرمجة التي أقيمت بمشاركة 150 جامعة.',
      fullContent: `
        <p>حقق فريق طلاب جامعتنا إنجازاً رائعاً بحصوله على المركز الأول في المسابقة الدولية للبرمجة التي أقيمت العام الحالي بمشاركة واسعة من 150 جامعة حول العالم.</p>
        
        <p>تألف الفريق الفائز من ثلاثة طلاب متميزين من كلية الهندسة وعلوم الحاسب، وقد تمكنوا من حل جميع المسائل البرمجية المعقدة في وقت قياسي، متفوقين على جميع الفرق المشاركة.</p>
        
        <p>وقد عبر عميد كلية الهندسة عن فخره واعتزازه بهذا الإنجاز المتميز، مؤكداً أن هذا الفوز يعكس مستوى التعليم العالي والتدريب المتخصص الذي تقدمه الجامعة في مجال علوم الحاسب والبرمجة.</p>
        
        <p>كما أعلن مدير الجامعة عن تكريم الفريق الفائز ومنحهم مكافآت مالية قيمة، بالإضافة إلى فرص للتدريب في كبرى الشركات التقنية العالمية.</p>
      `,
      date: new Date('2024-01-10'),
      category: 'أنشطة',
      images: [
        'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
        'https://images.pexels.com/photos/1181264/pexels-photo-1181264.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg',
      author: 'إدارة شؤون الطلاب',
      tags: ['برمجة', 'مسابقة', 'طلاب', 'فوز'],
      relatedNews: [1, 3, 5]
    },
    {
      id: 3,
      title: 'توقيع اتفاقية شراكة مع جامعة هارفارد الأمريكية',
      shortDescription: 'وقعت الجامعة اتفاقية شراكة استراتيجية مع جامعة هارفارد لتطوير البرامج الأكاديمية وتبادل الطلاب والأساتذة.',
      fullContent: `
        <p>في إطار توجه الجامعة نحو التوسع في الشراكات الدولية، تم توقيع اتفاقية شراكة استراتيجية مع جامعة هارفارد الأمريكية، إحدى أعرق الجامعات في العالم.</p>
        
        <p>تشمل الاتفاقية تطوير البرامج الأكاديمية المشتركة، وتبادل أعضاء هيئة التدريس والطلاب، بالإضافة إلى التعاون في المشاريع البحثية المتقدمة في مختلف التخصصات.</p>
        
        <p>حضر مراسم التوقيع مدير جامعتنا ونائب رئيس جامعة هارفارد للشؤون الدولية، حيث أكدا على أهمية هذه الشراكة في تعزيز التبادل الثقافي والأكاديمي بين الجامعتين.</p>
        
        <p>ومن المتوقع أن تبدأ البرامج التبادلية الأولى في الفصل الدراسي القادم، مما يتيح لطلاب جامعتنا فرصة الدراسة في إحدى أفضل الجامعات العالمية.</p>
      `,
      date: new Date('2024-01-08'),
      category: 'أخبار',
      images: [
        'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
        'https://images.pexels.com/photos/1205652/pexels-photo-1205652.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/1205651/pexels-photo-1205651.jpeg',
      author: 'مكتب العلاقات الدولية',
      tags: ['شراكة', 'هارفارد', 'تعاون دولي'],
      relatedNews: [1, 2, 6]
    },
    {
      id: 4,
      title: 'انطلاق فعاليات الأسبوع الثقافي السنوي',
      shortDescription: 'تنطلق اليوم فعاليات الأسبوع الثقافي السنوي للجامعة بمشاركة واسعة من الطلاب وأعضاء هيئة التدريس.',
      fullContent: `
        <p>انطلقت صباح اليوم فعاليات الأسبوع الثقافي السنوي للجامعة تحت شعار "التراث والمعاصرة"، بمشاركة حيوية من جميع كليات الجامعة.</p>
        
        <p>يتضمن برنامج الأسبوع الثقافي العديد من الفعاليات المتنوعة، منها المعارض الفنية، والأمسيات الشعرية، والعروض المسرحية، بالإضافة إلى المحاضرات الثقافية التي يقدمها نخبة من المثقفين والأكاديميين.</p>
        
        <p>كما يشهد الأسبوع تنظيم مسابقات ثقافية في مختلف المجالات مثل الشعر والقصة القصيرة والتصوير الفوتوغرافي، مع جوائز قيمة للفائزين.</p>
        
        <p>وقد أكد عميد شؤون الطلاب على أهمية هذه الفعاليات في إثراء الحياة الجامعية وتنمية المواهب الطلابية في المجالات الثقافية والفنية.</p>
      `,
      date: new Date('2024-01-05'),
      category: 'فعاليات',
      images: [
        'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
        'https://images.pexels.com/photos/1190298/pexels-photo-1190298.jpeg',
        'https://images.pexels.com/photos/1190299/pexels-photo-1190299.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/1190297/pexels-photo-1190297.jpeg',
      author: 'عمادة شؤون الطلاب',
      tags: ['ثقافة', 'فعاليات', 'طلاب'],
      relatedNews: [5, 6, 7]
    },
    {
      id: 5,
      title: 'إطلاق برنامج الماجستير في الطاقة المتجددة',
      shortDescription: 'أعلنت الجامعة عن إطلاق برنامج جديد للماجستير في الطاقة المتجددة بالتعاون مع معهد الطاقة الأوروبي.',
      fullContent: `
        <p>أعلنت جامعتنا عن إطلاق برنامج جديد للماجستير في الطاقة المتجددة، والذي يأتي في إطار توجه الجامعة نحو دعم البرامج الأكاديمية المتخصصة في المجالات الحيوية.</p>
        
        <p>البرنامج الجديد، الذي تم تطويره بالتعاون مع معهد الطاقة الأوروبي، يهدف إلى إعداد متخصصين في مجال الطاقة المتجددة والاستدامة البيئية.</p>
        
        <p>يتضمن البرنامج دراسة مكثفة في تقنيات الطاقة الشمسية وطاقة الرياح والطاقة الحيوية، بالإضافة إلى التطبيقات العملية والمشاريع البحثية المتقدمة.</p>
        
        <p>ومن المقرر أن يبدأ قبول الطلاب في البرنامج الجديد مع بداية الفصل الدراسي القادم، حيث سيتم توفير منح دراسية للطلاب المتميزين.</p>
      `,
      date: new Date('2024-01-03'),
      category: 'أخبار',
      images: [
        'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
        'https://images.pexels.com/photos/2800833/pexels-photo-2800833.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/2800832/pexels-photo-2800832.jpeg',
      author: 'عمادة الدراسات العليا',
      tags: ['ماجستير', 'طاقة متجددة', 'برنامج جديد'],
      relatedNews: [2, 3, 4]
    },
    {
      id: 6,
      title: 'ورشة عمل حول التسويق الرقمي للمشاريع الناشئة',
      shortDescription: 'تنظم الجامعة ورشة عمل متخصصة في التسويق الرقمي موجهة لرواد الأعمال الشباب وأصحاب المشاريع الناشئة.',
      fullContent: `
        <p>تنظم الجامعة ورشة عمل متخصصة في التسويق الرقمي تحت عنوان "استراتيجيات التسويق الحديثة للمشاريع الناشئة"، وذلك في إطار دعمها لرواد الأعمال الشباب.</p>
        
        <p>تستهدف الورشة أصحاب المشاريع الناشئة والطلاب المهتمين بريادة الأعمال، وتتضمن محاور متعددة حول وسائل التواصل الاجتماعي، والتسويق الإلكتروني، وتحليل البيانات.</p>
        
        <p>سيقدم الورشة نخبة من الخبراء المتخصصين في مجال التسويق الرقمي من داخل المملكة وخارجها، مع التركيز على التطبيقات العملية والحالات الدراسية الناجحة.</p>
        
        <p>كما ستتضمن الورشة جلسات تفاعلية وورش عمل جماعية، مما يتيح للمشاركين فرصة التعلم من التجارب المختلفة وبناء شبكة علاقات مهنية.</p>
      `,
      date: new Date('2024-01-02'),
      category: 'أنشطة',
      images: [
        'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
        'https://images.pexels.com/photos/3182813/pexels-photo-3182813.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/3182812/pexels-photo-3182812.jpeg',
      author: 'مركز ريادة الأعمال',
      tags: ['تسويق رقمي', 'ريادة أعمال', 'ورشة عمل'],
      relatedNews: [4, 5, 7]
    },
    {
      id: 7,
      title: 'معرض التوظيف السنوي يستقطب 80 شركة محلية وعالمية',
      shortDescription: 'شهد معرض التوظيف السنوي للجامعة مشاركة واسعة من 80 شركة محلية وعالمية، مما وفر فرصاً وظيفية متنوعة للخريجين.',
      fullContent: `
        <p>اختتمت الجامعة فعاليات معرض التوظيف السنوي الذي استمر لثلاثة أيام بمشاركة 80 شركة محلية وعالمية من مختلف القطاعات.</p>
        
        <p>شهد المعرض إقبالاً كبيراً من قبل الطلاب والخريجين، حيث بلغ عدد المشاركين أكثر من 2000 طالب وخريج من مختلف التخصصات.</p>
        
        <p>وقد وفر المعرض أكثر من 500 فرصة وظيفية في مجالات متنوعة شملت التكنولوجيا، والهندسة، والطب، والإدارة، والتسويق، والمالية.</p>
        
        <p>كما تضمن المعرض ورش عمل متخصصة حول كتابة السيرة الذاتية، ومهارات المقابلة الشخصية، وتطوير الذات المهنية، قدمها خبراء في الموارد البشرية.</p>
        
        <p>وأعرب مدير مركز الخريجين عن سعادته بنجاح المعرض وتحقيق أهدافه في ربط الخريجين بسوق العمل وتوفير الفرص الوظيفية المناسبة.</p>
      `,
      date: new Date('2023-12-28'),
      category: 'فعاليات',
      images: [
        'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
        'https://images.pexels.com/photos/1181397/pexels-photo-1181397.jpeg',
        'https://images.pexels.com/photos/1181398/pexels-photo-1181398.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/1181396/pexels-photo-1181396.jpeg',
      author: 'مركز الخريجين',
      tags: ['توظيف', 'خريجين', 'معرض'],
      relatedNews: [5, 6, 8]
    },
    {
      id: 8,
      title: 'حصول الجامعة على شهادة ISO في إدارة الجودة',
      shortDescription: 'حصلت الجامعة على شهادة الأيزو الدولية في إدارة الجودة، مما يعكس التزامها بأعلى معايير التعليم والخدمة.',
      fullContent: `
        <p>حصلت جامعتنا على شهادة الأيزو الدولية ISO 21001:2018 في إدارة الجودة للمؤسسات التعليمية، وذلك بعد عملية تقييم شاملة أجرتها إحدى الجهات المعتمدة دولياً.</p>
        
        <p>تأتي هذه الشهادة تتويجاً لجهود متواصلة بذلتها الجامعة على مدى سنوات طويلة في تطوير أنظمة الجودة وتحسين الخدمات التعليمية والإدارية.</p>
        
        <p>وقد خضعت جميع العمليات الأكاديمية والإدارية في الجامعة لعملية تقييم دقيقة شملت البرامج التعليمية، والخدمات الطلابية، والموارد البشرية، والمرافق والتجهيزات.</p>
        
        <p>هذا الإنجاز يضع الجامعة في مصاف الجامعات العالمية المتميزة في مجال ضمان الجودة، ويعزز من مكانتها كمؤسسة تعليمية رائدة في المنطقة.</p>
        
        <p>وأكد مدير الجامعة أن الحصول على هذه الشهادة ليس غاية في حد ذاته، بل وسيلة لضمان التطوير المستمر وتقديم أفضل الخدمات للطلاب والمجتمع.</p>
      `,
      date: new Date('2023-12-25'),
      category: 'أخبار',
      images: [
        'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
        'https://images.pexels.com/photos/3760264/pexels-photo-3760264.jpeg'
      ],
      mainImage: 'https://images.pexels.com/photos/3760263/pexels-photo-3760263.jpeg',
      author: 'مركز ضمان الجودة',
      tags: ['أيزو', 'جودة', 'اعتماد'],
      relatedNews: [1, 3, 7]
    }
  ];

  private categories: NewsCategory[] = [
    { id: 'أخبار', name: 'أخبار', count: 4 },
    { id: 'أنشطة', name: 'أنشطة', count: 2 },
    { id: 'فعاليات', name: 'فعاليات', count: 2 }
  ];

  getAllNews(): Observable<NewsItem[]> {
    return of(this.newsData);
  }

  getNewsByCategory(category?: string): Observable<NewsItem[]> {
    if (!category || category === 'الكل') {
      return of(this.newsData);
    }
    const filtered = this.newsData.filter(news => news.category === category);
    return of(filtered);
  }

  getNewsById(id: number): Observable<NewsItem | undefined> {
    const news = this.newsData.find(item => item.id === id);
    return of(news);
  }

  getRelatedNews(newsId: number, limit: number = 4): Observable<NewsItem[]> {
    const currentNews = this.newsData.find(item => item.id === newsId);
    if (!currentNews || !currentNews.relatedNews) {
      // Return random news if no related news specified
      const filtered = this.newsData.filter(item => item.id !== newsId).slice(0, limit);
      return of(filtered);
    }
    
    const related = this.newsData.filter(item => 
      currentNews.relatedNews!.includes(item.id)
    ).slice(0, limit);
    
    return of(related);
  }

  getCategories(): Observable<NewsCategory[]> {
    return of(this.categories);
  }

  getPreviousNews(currentId: number): Observable<NewsItem | null> {
    const currentIndex = this.newsData.findIndex(item => item.id === currentId);
    if (currentIndex > 0) {
      return of(this.newsData[currentIndex - 1]);
    }
    return of(null);
  }

  getNextNews(currentId: number): Observable<NewsItem | null> {
    const currentIndex = this.newsData.findIndex(item => item.id === currentId);
    if (currentIndex >= 0 && currentIndex < this.newsData.length - 1) {
      return of(this.newsData[currentIndex + 1]);
    }
    return of(null);
  }
}