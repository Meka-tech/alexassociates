import { IimageType } from "./image";

export interface IClientItem {
  name?: string;
  organization?: string;
  review?: string;
  rating?: number;
  image?: IimageType | null;
}
