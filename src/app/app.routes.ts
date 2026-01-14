import { Routes } from '@angular/router';
import { HomeComponent } from './core/features/luxor-national-university/Pages/Home/Home.component';

export const routes: Routes = [


 { path: '', component: HomeComponent },
  { path: 'home', redirectTo: '', pathMatch: 'full' },
  // Add more routes as needed
  { path: '**', redirectTo: '' }


];
