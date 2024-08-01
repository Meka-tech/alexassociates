import { IimageType } from "./image";

export interface IProject {
  title: string;
  category: string;
  description: string;
  clientName: string;
  date: Date;
  images: IimageType[];
  published?: boolean;
  _id: string;
}
