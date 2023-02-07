import { BlogDataType, ThemeDataType } from "./data-type";

export interface BlogCardPops {
  theme: ThemeDataType;
  title: string;
  desc: string;
  date: string;
  image: string;
  url: string;
  id: number;
}

export interface BlogPageUIProps {
  theme: ThemeDataType;
  classes: any;
  filteredArticles: BlogDataType[];
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  search: string;
}
