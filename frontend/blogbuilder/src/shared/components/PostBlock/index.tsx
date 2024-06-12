import { PostBlockContent } from "@/shared/models/Post";

import { PostBlockText } from "./Text";
import { PostBlockLImgText } from "./LImgText";
import { PostBlockRImgText } from "./RImgText";

export type PostBlockRendererProps = {
  block: PostBlockContent;
}

const PostBlockRenderer = ({ block }: PostBlockRendererProps) => {
  switch (block.type) {
    case 'text':
      return <PostBlockText block={block} />
    case 'r_img_text':
      return <PostBlockRImgText block={block} />
    case 'l_img_text':
      return <PostBlockLImgText block={block} />
  }
}

export default PostBlockRenderer;