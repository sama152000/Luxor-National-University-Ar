export interface NewsArticle {
  id: string;
  title: string;
  titleAr: string;
  excerpt: string;
  excerptAr: string;
  content: string;
  contentAr: string;
  image: string;
  publishDate: Date;
  author: string;
  authorAr: string;
  category: string;
  categoryAr: string;
  slug: string;
  featured: boolean;
}

export interface NewsSection {
  title: string;
  titleAr: string;
  subtitle: string;
  subtitleAr: string;
  articles: NewsArticle[];
}