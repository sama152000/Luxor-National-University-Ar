export interface ContactInfo {
  id: string;
  name: string;
  position: string;
  phone: string;
  email?: string;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface UniversityInfo {
  name: string;
  nameAr: string;
  email: string;
  address: string;
  addressAr: string;
}