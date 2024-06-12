import { PostBlockContent, PostBlockFieldContent, PostBlockFieldType } from "../models/Post";

export const findField = (
  block: PostBlockContent,
  key: PostBlockFieldType
): PostBlockFieldContent | undefined => {
  return block.fields.find(field => field.type == key);
}