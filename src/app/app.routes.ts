import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/luxor-national-university/Pages/Home/Home.component';
import { AboutUniversityComponent } from './core/features/luxor-national-university/Pages/about-university/about-university.component';
import { NewsComponent } from './core/features/luxor-national-university/Pages/news/news.component';
import { NewsDetailsComponent } from './core/features/luxor-national-university/Pages/news/news-details/news-details.component';
import { FacultiesComponent } from './core/features/luxor-national-university/Pages/faculties/faculties.component';
import { FacultyDetailsComponent } from './core/features/luxor-national-university/Pages/faculties/faculty-details/faculty-details.component';

export const routes: Routes = [


 { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
   { 
    path: '', 
    redirectTo: '/about', 
    pathMatch: 'full' 
  },
  {
    path: 'about',
    loadComponent: () => import('./core/features/luxor-national-university/Pages/about-university/about-university.component')
      .then(m => m.AboutUniversityComponent),
    title: 'عن الجامعة'
  },
  {
    path: 'news',
    loadComponent: () => import('./core/features/luxor-national-university/Pages/news/news.component')
      .then(m => m.NewsComponent),
    title: 'الأخبار'
  },
  {
    path: 'news/:id',
    loadComponent: () => import('./core/features/luxor-national-university/Pages/news/news-details/news-details.component')
      .then(m => m.NewsDetailsComponent),
    title: 'تفاصيل الخبر'
  },
  {
    path: 'faculties',
    loadComponent: () => import('./core/features/luxor-national-university/Pages/faculties/faculties.component')
      .then(m => m.FacultiesComponent),
    title: 'الكليات'
  },
  {
    path: 'faculties/:id',
    loadComponent: () => import('./core/features/luxor-national-university/Pages/faculties/faculty-details/faculty-details.component')
      .then(m => m.FacultyDetailsComponent),
    title: 'تفاصيل الكلية'
  },
   {
    path: 'contactInfo',
    loadComponent: () => import('./core/features/luxor-national-university/Pages/contact-us/contact-us.component')
      .then(m => m.ContactUsComponent),
    title: 'معلومات الاتصال'
  }, {
    path: 'services',
    loadComponent: () => import('./core/features/luxor-national-university/Pages/services/services.component')
      .then(m => m.ServicesComponent),
    title: 'الخدمات'
  },
  { 
    path: '**', 
    redirectTo: '/about' 
  },
  // Add more routes as needed
  { path: '**', redirectTo: '' }


];
