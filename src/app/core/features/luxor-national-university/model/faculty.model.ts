export interface FacultyContact {
  phone: string;
  email: string;
  website: string;
}

export interface FacultyAbout {
  overview: string;
  vision: string;
  mission: string;
  goals: string;
  history: string;
}

export interface Faculty {
  id: string | number;
  name: string;
  shortDescription?: string;
  fullDescription?: string;
  icon?: string;
  backgroundImage?: string;
  cssClass?: string;
  description?: string;
  link?: string;
  images?: string[];
  mainImage?: string;
  establishedYear?: number;
  studentsCount?: number;
  staffCount?: number;
  programsCount?: number;
  dean?: string;
  location?: string;
  contact?: FacultyContact;
  about?: FacultyAbout;
}

export interface FacultySearchFilter {
  searchText?: string;
  alphabetFilter?: string;
}

export interface FacultiesSection {
  id: string;
  title: string;
  centerButton: {
    text: string;
    subtext: string;
    link: string;
  };
  faculties: Faculty[];
}