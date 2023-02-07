export interface ThemeDataType {
  type: string;
  primary: string;
  quaternary: string;
  quaternaryLight: string;
  secondary: string;
  tertiary: string;
  buttonColor: string;
  contactsimg: any;
}

export interface AboutDataType {
  title: string;
  description1: string;
  description2: string;
  image: number;
}

export interface BlogDataType {
  id: number;
  title: string;
  description: string;
  date: string;
  image: string;
  url: string;
}

export interface ContactsData {
  email: string;
  phone: string;
  address: string;
  sheetAPI: string;
}

export interface EducationData {
  id: number;
  institution: string;
  course: string;
  startYear: string;
  endYear: string;
}

export interface ExperienceDataType {
  id: number;
  company: string;
  jobtitle: string;
  startYear: string;
  endYear: string;
}

export interface HeaderDataType {
  name: string;
  title: string;
  desciption: string;
  image: string;
  imagebw: string;
  resumePdf: string;
}

export interface SocialsDataType {
  github: string;
  facebook: string;
  linkedIn: string;
  twitter: string;
  medium: string;
  stackOverflow: string;
  mail: string;
  youtube: string;
}

export interface ProjectDataType {
  id: number;
  projectName: string;
  projectDesc: string;
  tags: string[];
  code: string;
  demo: string;
  image: any;
}

export interface CertificateDataType {
  id: string;
  title: string;
  image: any;
  link: string;
}
