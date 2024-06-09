type PostBlockType = 'text' | 'r_img_text' | 'l_img_text';

export type PostBlockContent = {
  id: string;
  type: PostBlockType;
  data: Record<string, string>;
}

export type PostContent = {
  title: string;
  blocks: PostBlockContent[];
}