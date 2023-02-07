import { ThemeDataType } from "./data-type";

export interface ContactUIPops {
  open: boolean;
  success: boolean;
  errMsg: string;
  handleClose: any;
  classes: any;
  handleContactForm: any;
  name: string;
  setName: React.Dispatch<React.SetStateAction<string>>;
  form: any;
  email: string;
  setEmail: React.Dispatch<React.SetStateAction<string>>;
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
}

export interface EducationCardPops {
  id: number;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
}

export interface ExperienceCardPops {
  id: number;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
}

export interface LandingUIPops {
  theme: ThemeDataType;
  drawerOpen: boolean;
  classes: any;
}

export interface NavbarUIPops {
  theme: ThemeDataType;
  shortname: Function;
  classes: any;
  handleDrawerOpen: () => void;
  handleDrawerClose: () => void;
  open: boolean;
  changeTheme: () => void;
  isDark: boolean;
}

export interface ThemeContextType {
  theme: ThemeDataType;
  changeTheme: () => void;
  isDark: boolean;
}

export interface ContextValuesTypes {
  theme: ThemeDataType;
  drawerOpen: boolean;
  setHandleDrawer: () => void;
  changeTheme: () => void;
  isDark: boolean;
}
