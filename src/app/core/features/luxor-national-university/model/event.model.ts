export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  image: string;
  link?: string;
}

export interface EventsSection {
  id: string;
  title: string;
  backgroundImage: string;
  events: Event[];
  viewAllLink: string;
}