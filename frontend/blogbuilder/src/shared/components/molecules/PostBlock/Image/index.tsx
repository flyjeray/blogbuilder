import { findField } from "@/shared/utils/findFieldInBlock";
import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';

export const PostBlockImage = ({ block }: PostBlockRendererProps) => {
  const imageFieldData = findField(block, 'img');

  if (!imageFieldData) return null;

  return (
    <img className={styles.image} src={imageFieldData.value} />
  )
}