export interface ICardComponent {
  imgSrc: string;
  id: number;
  title: string;
  vote_count: number;
  vote_average: number;
  release_date: string;
}

export interface IGlobalData {
  children: React.ReactNode;
}

export interface navMenu {
  label: string;
  href: string;
}
