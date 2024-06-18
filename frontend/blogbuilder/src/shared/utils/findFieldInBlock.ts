import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post";
import { PostBlockFieldType } from "@/shared/constants/PostBlockFields";

export const findField = (
  block: PostBlockContent,
  key: PostBlockFieldType
): PostBlockFieldContent | undefined => {
  return block.fields.find(field => field.type == key);
}