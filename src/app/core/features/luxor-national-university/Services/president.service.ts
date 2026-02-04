import { Injectable } from '@angular/core';
import { President } from '../model/president.model';

@Injectable({
  providedIn: 'root'
})
export class PresidentService {

  constructor() {}

  getPresident(): President {
    return {
      id: '1',
      name: 'Prof. Dr. Sadi ElGhol',
      title: 'President of Luxor National University',
      image: 'https://images.pexels.com/photos/5212345/pexels-photo-5212345.jpeg?auto=compress&cs=tinysrgb&w=400',
      welcomeMessage: 'Luxor National University is committed to excellence in education, scientific research, and community service. We strive to prepare graduates capable of shaping the future with knowledge and integrity.',
      fullTitle: 'President of Luxor National University'
    };
  }
}