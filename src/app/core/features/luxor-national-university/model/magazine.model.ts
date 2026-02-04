export interface MagazinePage {
  id: string;
  type: 'image' | 'content';
  content?: {
    title: string;
    subtitle?: string;
    text: string;
    date?: string;
  };
  image?: {
    src: string;
    alt: string;
  };
}

export interface UniversityMagazine {
  id: string;
  title: string;
  leftPage: MagazinePage;
  rightPage: MagazinePage;
}