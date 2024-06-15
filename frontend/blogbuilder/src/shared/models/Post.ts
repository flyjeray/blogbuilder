type PostBlockType = 'text' | 'r_img_text' | 'l_img_text' | 'secondary_title' | 'img';

export type PostBlockFieldType = 'text' | 'img';

export type PostBlockFieldContent = {
  id: string;
  type: PostBlockFieldType;
  value: string;
}

export type PostBlockContent = {
  id: string;
  type: PostBlockType;
  fields: PostBlockFieldContent[];
}

export type PostContent = {
  title: string;
  blocks: PostBlockContent[];
}