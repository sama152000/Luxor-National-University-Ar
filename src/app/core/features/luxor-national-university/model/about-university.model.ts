export interface AboutUniversitySection {
  id: string;
  title: string;
  content: string;
  icon?: string;
}

export interface AboutUniversityData {
  overview: AboutUniversitySection;
  vision: AboutUniversitySection;
  mission: AboutUniversitySection;
  goals: AboutUniversitySection;
  history: AboutUniversitySection;
}