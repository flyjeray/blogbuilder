import { PostBlockContent } from "@/shared/models/Post";

import { PostBlockText } from "./Text";
import { PostBlockLImgText } from "./LImgText";
import { PostBlockRImgText } from "./RImgText";
import { PostBlockSecondaryTitle } from "./SecondaryTitle";
import { PostBlockImage } from "./Image";

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
    case 'secondary_title':
      return <PostBlockSecondaryTitle block={block} />
    case 'img':
      return <PostBlockImage block={block} />
  }
}

export default PostBlockRenderer;