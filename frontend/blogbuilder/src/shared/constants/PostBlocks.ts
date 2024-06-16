export type PostBlockType = 
  'text' | 
  'r_img_text' | 
  'l_img_text' | 
  'secondary_title' | 
  'img';

export const BlockLabels: Record<PostBlockType, string> = {
  text: "Text",
  secondary_title: "Title",
  img: "Image",
  r_img_text: "Text with Image on the right",
  l_img_text: "Text with Image on the left"
}
