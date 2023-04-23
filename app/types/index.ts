import { PortableTextBlock } from "sanity";

export interface IProject {
  _id: string;
  _createdAt: string;
  name: string;
  slug: string;
  image: string;
  url: string;
  content: PortableTextBlock;
}
