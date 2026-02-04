import { SocialLink, ImageAsset } from './common.model';

export interface FooterLink {
  label: string;
  url: string;
}

export interface FooterSection {
  title: string;
  links: FooterLink[];
}

export interface FooterData {
  id: string;
  logo: ImageAsset;
  description: string;
  sections: FooterSection[];
  socialLinks: SocialLink[];
  copyright: string;
  year: number;
}