import { MockPost } from "@/mocks/MockPost";
import PostBlockRenderer from "@/shared/components/PostBlock";
import styles from './styles.module.scss';

type Props = {
  params: {
    slug: string;
  }
}

export async function generateMetadata({ params }: Props) {
  return {
    title: `${params.slug} | BlogBuilder`,
    description: params.slug,
  }
}

const BlogPostPage = ({ params }: Props) => {
  return (
    <main className={styles.container}>
      <h1>{MockPost.title}</h1>
      <div className={styles.blocks}>
        {MockPost.blocks.map(block => (
          <PostBlockRenderer key={block.id} block={block} />
        ))}
      </div>
    </main>
  )
}

export default BlogPostPage;