import { findField } from "@/shared/utils/findFieldInBlock";
import { PostBlockRendererProps } from "..";
import styles from './styles.module.scss';

export const PostBlockSecondaryTitle = ({ block }: PostBlockRendererProps) => {
  const textFieldData = findField(block, "text");

  if (!textFieldData) return null;

  return (
    <h2 className={styles.title}>{textFieldData.value}</h2>
  )
}