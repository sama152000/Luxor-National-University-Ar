export interface Program {
  id: number;
  facultyId: number;
  name: string;
  shortDescription: string;
  fullDescription: string;
  degree: 'بكالوريوس' | 'ماجستير' | 'دكتوراه' | 'دبلوم';
  duration: string;
  creditHours: number;
  language: 'العربية' | 'الإنجليزية' | 'مختلط';
  admissionRequirements: string[];
  careerOpportunities: string[];
  courses: string[];
  fees?: number;
}