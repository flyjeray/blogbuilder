import Image from "next/image";
import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';

export const PostBlockLImgText = ({ data }: PostBlockRendererProps) => {
  return (
    <div className={styles.container}>
      <p>{data.data['content']}</p>
      <img src={data.data['image']} alt="Image" className={styles.image} />
    </div>
  )
}