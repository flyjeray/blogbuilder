import Link from 'next/link';
import styles from './styles.module.scss';
import { PostPreviewDetails } from '@/shared/models/PostDetails';
import EyeIcon from '@/assets/icons/eye.svg';

type Props = {
  post: PostPreviewDetails;
  adminActionsEnabled: boolean;
  onDelete?: () => void;
}

const PostPreviewCard = ({ post, adminActionsEnabled, onDelete }: Props) => {
  return (
    <div className={styles.post_entry}>
      <p>{new Date(post.createdAt).toUTCString()}</p>
      {adminActionsEnabled ? (
        <p className={styles.title}>{post.title}</p>
      ) : (
        <Link className={styles.title} href={`post/${post.id}`}>{post.title}</Link>
      )}
      <div className={styles.row}>
        <img src={EyeIcon.src} style={{ color: 'white' }} />
        <p>{post.views}</p>
      </div>
      {adminActionsEnabled && (
        <div className={styles.row}>
          <Link href={`/post/${post.id}`}>View</Link>
          <Link href={`/admin/post/${post.id}`}>Edit</Link>
          <p className={styles.delete} onClick={onDelete}>Delete</p>
        </div>
      )}
    </div>
  )
}

export default PostPreviewCard;