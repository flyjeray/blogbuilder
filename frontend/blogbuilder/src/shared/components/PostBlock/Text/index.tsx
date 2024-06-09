import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';

export const PostBlockText = ({ data }: PostBlockRendererProps) => {
  return (
    <p className={styles.content}>{data.data['content']}</p>
  )
}