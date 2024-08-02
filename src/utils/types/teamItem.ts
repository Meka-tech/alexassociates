import { IimageType } from "./image";

export interface ITeamItem {
  fullname?: string;
  role?: string;
  description?: string;
  image?: IimageType | null;
}
