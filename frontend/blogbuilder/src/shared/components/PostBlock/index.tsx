import { PostBlockContent } from "@/shared/models/Post";

import { PostBlockText } from "./Text";
import { PostBlockLImgText } from "./LImgText";
import { PostBlockRImgText } from "./RImgText";

export type PostBlockRendererProps = {
  data: PostBlockContent;
}

const PostBlockRenderer = ({ data }: PostBlockRendererProps) => {
  switch (data.type) {
    case 'text':
      return <PostBlockText data={data} />
    case 'r_img_text':
      return <PostBlockRImgText data={data} />
    case 'l_img_text':
      return <PostBlockLImgText data={data} />
  }
}

export default PostBlockRenderer;