import Link from 'next/link';
import styles from './styles.module.scss';
import { PostPreviewDetails } from '@/shared/models/PostDetails';
import EyeIcon from '@/assets/icons/eye.svg';

type Props = {
  post: PostPreviewDetails;
  adminActions: boolean;
}

const PostPreviewCard = ({ post, adminActions }: Props) => {
  return (
    <div className={styles.post_entry}>
      <p>{new Date(post.createdAt).toUTCString()}</p>
      {adminActions ? (
        <p className={styles.title}>{post.title}</p>
      ) : (
        <Link className={styles.title} href={`post/${post.id}`}>{post.title}</Link>
      )}
      <div className={styles.row}>
        <img src={EyeIcon.src} style={{ color: 'white' }} />
        <p>{post.views}</p>
      </div>
      {adminActions && (
        <div className={styles.row}>
          <Link href={`/post/${post.id}`}>View</Link>
          <Link href={`/admin/post/${post.id}`}>Edit</Link>
        </div>
      )}
    </div>
  )
}

export default PostPreviewCard;