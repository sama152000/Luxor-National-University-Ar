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