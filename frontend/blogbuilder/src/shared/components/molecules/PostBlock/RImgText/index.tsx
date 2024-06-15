import Image from "next/image";
import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';
import { findField } from "@/shared/utils/findFieldInBlock";

export const PostBlockRImgText = ({ block }: PostBlockRendererProps) => {
  const textFieldData = findField(block, 'text');
  const imgFieldData = findField(block, 'img');

  if (!(textFieldData && imgFieldData)) return null;

  return (
    <div className={styles.container}>
      <img src={imgFieldData.value} alt="Image" className={styles.image} />
      <p className={styles.text}>{textFieldData.value}</p>
    </div>
  )
}