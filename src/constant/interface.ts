import { ReactElement } from "react";

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
  icon: ReactElement;
}

export interface IIconObj {
  home: ReactElement;
  search: ReactElement;
  movie: ReactElement;
  series: ReactElement;
  tv: ReactElement;
  watch: ReactElement;
}
