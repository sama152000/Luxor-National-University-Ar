import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Staff } from '../model/staff.model';

@Injectable({
  providedIn: 'root'
})
export class StaffService {
  private staff: Staff[] = [
    // كلية اللغات والترجمة والعلوم الإنسانية (Faculty ID: 1)
    {
      id: 1,
      facultyId: 1,
      name: 'د. محمد عبدالسلام',
      position: 'عميد الكلية',
      image: './assets/icon.jpg',
      isDean: true,
    },
    {
      id: 2,
      facultyId: 1,
      name: 'عضو 1',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
    },
    {
      id: 3,
      facultyId: 1,
      name: 'عضو 2',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
    },

    // كلية الحاسبات والمعلومات والذكاء الاصطناعي (Faculty ID: 2)
    {
      id: 4,
      facultyId: 2,
      name: 'د. أحمد علي',
      position: 'عميد الكلية',
      image: './assets/icon.jpg',
      isDean: true,
    },
    {
      id: 5,
      facultyId: 2,
      name: 'عضو 1',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
    },
    {
      id: 6,
      facultyId: 2,
      name: 'عضو 2',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
    },

    // كلية الفنون والتصميم (Faculty ID: 3)
    {
      id: 7,
      facultyId: 3,
      name: 'د. سارة محمود',
      position: 'عميد الكلية',
      image: './assets/icon.jpg',
      isDean: true,
    },
    {
      id: 8,
      facultyId: 3,
      name: 'عضو 1',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
    },
    {
      id: 9,
      facultyId: 3,
      name: 'عضو 2',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
    },

    // كلية السياحة والآثار (Faculty ID: 4)
    {
      id: 10,
      facultyId: 4,
      name: 'د. يوسف حسن',
      position: 'عميد الكلية',
      image: './assets/icon.jpg',
      isDean: true,
    },
    {
      id: 11,
      facultyId: 4,
      name: 'عضو 1',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
    },
    {
      id: 12,
      facultyId: 4,
      name: 'عضو 2',
      position: 'عضو هيئة تدريس',
      image: './assets/icon.jpg',
      isDean: false,
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
