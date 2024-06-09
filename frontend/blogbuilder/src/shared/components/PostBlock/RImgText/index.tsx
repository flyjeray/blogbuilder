import Image from "next/image";
import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';

export const PostBlockRImgText = ({ data }: PostBlockRendererProps) => {
  return (
    <div className={styles.container}>
      <img src={data.data['image']} alt="Image" className={styles.image} />
      <p className={styles.text}>{data.data['content']}</p>
    </div>
  )
}