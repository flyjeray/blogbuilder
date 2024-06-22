import { PostBlockType } from "@/shared/constants/PostBlocks";
import { PostBlockFieldType } from "@/shared/constants/PostBlockFields";

export type PostBlockFieldContent = {
  id: string;
  type: PostBlockFieldType;
  value: string;
}

export type PostBlockContent = {
  id: string;
  type: PostBlockType;
  fields: PostBlockFieldContent[];
  order: number;
}

export type PostContent = {
  title: string;
  blocks: PostBlockContent[];
}