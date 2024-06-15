import { findField } from "@/shared/utils/findFieldInBlock";
import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';

export const PostBlockText = ({ block }: PostBlockRendererProps) => {
  const textFieldData = findField(block, 'text');

  if (!textFieldData) return null;

  return (
    <p className={styles.content}>{textFieldData.value}</p>
  )
}