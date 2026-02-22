import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { Service } from '../model/service.model';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {
  private services: Service[] = [
    {
      id: '1',
      title: 'Academic Programs',
      titleAr: 'البرامج الأكاديمية',
      description: 'We offer comprehensive undergraduate and graduate programs designed to meet the evolving needs of modern industries and prepare students for successful careers.',
      descriptionAr: 'نقدم برامج أكاديمية شاملة للبكالوريوس والدراسات العليا مصممة لتلبية احتياجات الصناعات الحديثة المتطورة وإعداد الطلاب للنجاح المهني.',
      bulletPoints: [
        'Undergraduate degrees in multiple disciplines',
        'Master\'s and PhD programs',
        'Professional certification courses',
        'Industry-aligned curriculum'
      ],
      bulletPointsAr: [
        'درجات البكالوريوس في تخصصات متعددة',
        'برامج الماجستير والدكتوراه',
        'دورات الشهادات المهنية',
        'منهج متماشي مع الصناعة'
      ]
    },
     {
      id: '9',
      title: 'Academic Programs',
      titleAr: 'البرامج الأكاديمية',
      description: 'We offer comprehensive undergraduate and graduate programs designed to meet the evolving needs of modern industries and prepare students for successful careers.',
      descriptionAr: 'نقدم برامج أكاديمية شاملة للبكالوريوس والدراسات العليا مصممة لتلبية احتياجات الصناعات الحديثة المتطورة وإعداد الطلاب للنجاح المهني.',
      bulletPoints: [
        'Undergraduate degrees in multiple disciplines',
        'Master\'s and PhD programs',
        'Professional certification courses',
        'Industry-aligned curriculum'
      ],
      bulletPointsAr: [
        'درجات البكالوريوس في تخصصات متعددة',
        'برامج الماجستير والدكتوراه',
        'دورات الشهادات المهنية',
        'منهج متماشي مع الصناعة'
      ]
    },
    {
      id: '2',
      title: 'Research & Innovation',
      titleAr: 'البحث والابتكار',
      description: 'Our research centers focus on cutting-edge innovations and scientific discoveries that contribute to societal development and knowledge advancement.',
      descriptionAr: 'تركز مراكز البحث لدينا على الابتكارات المتطورة والاكتشافات العلمية التي تساهم في التنمية المجتمعية وتقدم المعرفة.',
      bulletPoints: [
        'State-of-the-art research facilities',
        'Collaborative research projects',
        'Innovation incubators',
        'International research partnerships'
      ],
      bulletPointsAr: [
        'مرافق بحثية متطورة',
        'مشاريع بحثية تعاونية',
        'حاضنات الابتكار',
        'شراكات بحثية دولية'
      ]
    },
    {
      id: '3',
      title: 'Student Services',
      titleAr: 'الخدمات الطلابية',
      description: 'Comprehensive support services designed to enhance student experience, from academic guidance to personal development and career preparation.',
      descriptionAr: 'خدمات دعم شاملة مصممة لتعزيز تجربة الطلاب، من التوجيه الأكاديمي إلى التنمية الشخصية وإعداد المسيرة المهنية.',
      bulletPoints: [
        'Academic advising and counseling',
        'Career guidance and placement',
        'Student activities and clubs',
        'Health and wellness programs'
      ],
      bulletPointsAr: [
        'الإرشاد الأكاديمي والاستشارة',
        'التوجيه المهني والتوظيف',
        'الأنشطة الطلابية والأندية',
        'برامج الصحة والعافية'
      ]
    },
    {
      id: '4',
      title: 'Community Engagement',
      titleAr: 'المشاركة المجتمعية',
      description: 'Active participation in community development through outreach programs, public lectures, and collaborative initiatives with local organizations.',
      descriptionAr: 'المشاركة الفعالة في التنمية المجتمعية من خلال برامج التوعية والمحاضرات العامة والمبادرات التعاونية مع المنظمات المحلية.',
      bulletPoints: [
        'Community outreach programs',
        'Public lectures and workshops',
        'Partnership with local organizations',
        'Volunteer opportunities for students'
      ],
      bulletPointsAr: [
        'برامج التوعية المجتمعية',
        'المحاضرات العامة وورش العمل',
        'الشراكة مع المنظمات المحلية',
        'فرص التطوع للطلاب'
      ]
    },
    {
      id: '5',
      title: 'Digital Learning',
      titleAr: 'التعلم الرقمي',
      description: 'Modern digital learning platforms and technologies that provide flexible, accessible, and interactive educational experiences for all students.',
      descriptionAr: 'منصات وتقنيات التعلم الرقمي الحديثة التي توفر تجارب تعليمية مرنة ومتاحة وتفاعلية لجميع الطلاب.',
      bulletPoints: [
        'Online learning management system',
        'Virtual classrooms and labs',
        'Digital library resources',
        'Mobile learning applications'
      ],
      bulletPointsAr: [
        'نظام إدارة التعلم الإلكتروني',
        'الفصول والمختبرات الافتراضية',
        'موارد المكتبة الرقمية',
        'تطبيقات التعلم المحمول'
      ]
    }
  ];

  getServices(): Observable<Service[]> {
    return of(this.services).pipe(delay(300));
  }

  getServiceById(id: string): Observable<Service | undefined> {
    const service = this.services.find(s => s.id === id);
    return of(service).pipe(delay(300));
  }
}