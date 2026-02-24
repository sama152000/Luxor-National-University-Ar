import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/luxor-national-university/Pages/Home/Home.component';
import { AboutUniversityComponent } from './core/features/luxor-national-university/Pages/about-university/about-university.component';
import { NewsComponent } from './core/features/luxor-national-university/Pages/news/news.component';
import { NewsDetailsComponent } from './core/features/luxor-national-university/Pages/news/news-details/news-details.component';
import { FacultiesComponent } from './core/features/luxor-national-university/Pages/faculties/faculties.component';
import { FacultyDetailsComponent } from './core/features/luxor-national-university/Pages/faculties/faculty-details/faculty-details.component';
import { LuxorNationalUniversityComponent } from './core/features/luxor-national-university/luxor-national-university.component';
import { ServicesComponent } from './core/features/luxor-national-university/Pages/services/services.component';
import { ContactUsComponent } from './core/features/luxor-national-university/Pages/contact-us/contact-us.component';

export const routes: Routes = [

   {
    path: '',
    component: LuxorNationalUniversityComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'about', component: AboutUniversityComponent},
      {path: 'news', component: NewsComponent},
      {path: 'news/:id', component: NewsDetailsComponent},
      {path: 'faculties', component: FacultiesComponent},
      {path: 'faculties/:id', component: FacultyDetailsComponent},
      {path: 'services', component:ServicesComponent},
      {path: 'services/:id', component: ServicesComponent},
      {path :'contactInfo', component: ContactUsComponent},
      {path: '**', redirectTo: 'home' }

]}
];
