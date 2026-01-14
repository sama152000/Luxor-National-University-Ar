export interface NavigationItem {
  id: string;
  title: string;
  titleAr: string;
  route: string;
  icon: string;
  image?: string;
  order: number;
  isActive?: boolean;
}

export interface LanguageOption {
  code: string;
  name: string;
  direction: 'ltr' | 'rtl';
  flag?: string;
}

export interface UniversityInfo {
  name: string;
  nameAr: string;
  tagline: string;
  taglineAr: string;
  logo: string;
  description: string;
  descriptionAr: string;
  establishedYear: number;
  contact: {
    phone: string;
    email: string;
    address: string;
    addressAr: string;
  };
  socialMedia: {
    facebook?: string;
    twitter?: string;
    instagram?: string;
    linkedin?: string;
    youtube?: string;
  };
}