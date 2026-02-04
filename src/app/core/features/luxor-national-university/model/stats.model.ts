export interface Statistic {
  id: string;
  icon: string;
  value: number;
  label: string;
  suffix?: string;
  animationDelay: number;
}

export interface StatsSection {
  id: string;
  title: string;
  statistics: Statistic[];
}