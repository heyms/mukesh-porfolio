import { ProjectDataType, ThemeDataType } from "./data-type";

export interface ProjectCardPops {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code: string;
  demo: string;
  image: any;
  theme: ThemeDataType;
}

export interface ProjectCardUIPops {
  id: number;
  name: string;
  desc: string;
  tags: string[];
  code: string;
  demo: string;
  image: string;
  theme: ThemeDataType;
  classes: any;
}

export interface ProjectPageUIPops {
  theme: ThemeDataType;
  classes: any;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
  filteredProjects: ProjectDataType[];
}

export interface ProjectUIPops {
  theme: ThemeDataType;
  classes: any;
}
