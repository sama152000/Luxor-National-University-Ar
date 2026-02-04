export interface Faculty {
  id: string;
  name: string;
  icon: string;
  backgroundImage: string;
  cssClass: string;
  description?: string;
  link?: string;
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