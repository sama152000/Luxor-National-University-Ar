export interface HeroContent {
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  ctaText: string;
  ctaTextAr: string;
  ctaLink: string;
  images: string[];
}

export interface VisionMission {
  vision: {
    title: string;
    titleAr: string;
    content: string;
    contentAr: string;
    icon: string;
  };
  mission: {
    title: string;
    titleAr: string;
    content: string;
    contentAr: string;
    icon: string;
  };
}

export interface LoaderConfig {
  enabled: boolean;
  duration: number;
  animationType: 'geometric' | 'logo' | 'particles';
}