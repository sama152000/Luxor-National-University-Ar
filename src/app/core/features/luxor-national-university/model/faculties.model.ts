// export interface Faculty {
//   id: string;
//   name: string;

//   image: string;
//   backgroundImage: string;
//   dean: string;
//   deanAr: string;
//   establishedYear: number;
//   studentsCount: number;
//   programsCount: number;
//   slug: string;
//   departments: string[];
//   departmentsAr: string[];
// }

export interface FacultiesSection {
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  backgroundImage: string;
  faculties: Faculty[];
}

export interface Faculty {
  id: string;
  name: string;
    nameAr: string;
  description: string;
  descriptionAr: string;
  shortDescription: string;
  fullDescription: string;
  images: string[];
  mainImage: string;
  establishedYear: number;
  studentsCount: number;
  staffCount: number;
  programsCount: number;
  dean: string;
  location: string;
  contact: {
    phone: string;
    email: string;
    website?: string;
  };
  about: {
    overview: string;
    vision: string;
    mission: string;
    goals: string;
    history: string;
  };
  deanAr: string;
   slug: string;
   departments: string[];
   departmentsAr: string[];
}

export interface FacultySearchFilter {
  searchText: string;
  alphabetFilter: string;
}

