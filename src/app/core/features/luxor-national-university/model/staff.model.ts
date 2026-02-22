export interface Staff {
  id: number;
  facultyId: number;
  name: string;
  position: string;
  image: string;
  email: string;
  phone?: string;
  office?: string;
  biography: string;
  qualifications: string[];
  specializations: string[];
  researchInterests: string[];
  publications?: string[];
  isDean: boolean;
  joinDate: Date;
}