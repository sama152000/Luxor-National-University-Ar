export interface UniversityGoal {
  id: string;
  title: string;
  titleAr: string;
  description: string;
  descriptionAr: string;
  icon: string;
  order: number;
}

export interface GoalsSection {
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  logo: string;
  goals: UniversityGoal[];
}