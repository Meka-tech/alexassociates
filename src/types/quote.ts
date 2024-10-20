import { IimageType } from "./image";

export interface IQuote {
  firstname: string;
  lastname: string;
  email: string;
  phone: string;
  projectType: string;
  location: string;
  services: string[];
  startDate: Date;
  endDate: Date;
  description: string;
  requirements: string;
  budget: string;
  addditionalInfo?: string;
  image: IimageType;
  createdAt: Date;
  _id: string;
}
