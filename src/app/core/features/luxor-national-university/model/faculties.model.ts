export interface Faculty {
  id: string;
  name: string;
  nameAr: string;
  description: string;
  descriptionAr: string;
  image: string;
  backgroundImage: string;
  dean: string;
  deanAr: string;
  establishedYear: number;
  studentsCount: number;
  programsCount: number;
  slug: string;
  departments: string[];
  departmentsAr: string[];
}

export interface FacultiesSection {
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  backgroundImage: string;
  faculties: Faculty[];
}