export interface NewsArticle {
  id: string;
  title: string;
  excerpt?: string;
  content?: string;
  image: string;
  category: string;
  date: string;
  link: string;
  featured: boolean;
}

export interface NewsSection {
  id: string;
  title: string;
  articles: NewsArticle[];
}

export interface NewsItem {
  id: number;
  title: string;
  shortDescription: string;
  fullContent: string;
  date: Date;
  category: 'أخبار' | 'أنشطة' | 'فعاليات';
  images: string[];
  mainImage: string;
  author?: string;
  tags?: string[];
  relatedNews?: number[];
}

export interface NewsCategory {
  id: string;
  name: string;
  count: number;
}