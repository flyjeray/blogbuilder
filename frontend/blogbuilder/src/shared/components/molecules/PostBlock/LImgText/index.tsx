import Image from "next/image";
import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';
import { findField } from "@/shared/utils/findFieldInBlock";

export const PostBlockLImgText = ({ block }: PostBlockRendererProps) => {
  const textFieldData = findField(block, 'text');
  const imgFieldData = findField(block, 'img');

  if (!(textFieldData && imgFieldData)) return null;

  return (
    <div className={styles.container}>
      <p className={styles.text}>{textFieldData.value}</p>
      <img src={imgFieldData.value} alt="Image" className={styles.image} />
    </div>
  )
}