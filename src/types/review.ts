import { IimageType } from "./image";

export interface IReview {
  name: string;
  organization: string;
  rating: number;
  createdAt: Date;
  image: IimageType;
  review: string;
  published: boolean;
  _id: string;
}
