export interface HeroSlide {
  id: string;
  backgroundImage: string;
  title: {
    words: string[];
  };
  subtitle: string;
  active: boolean;
}

export interface HeroDot {
  id: string;
  label: string;
  active: boolean;
  progress: number;
}