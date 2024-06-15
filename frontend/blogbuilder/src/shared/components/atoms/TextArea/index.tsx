import { HTMLProps } from "react";
import styles from './styles.module.scss';

type Props = HTMLProps<HTMLTextAreaElement>;

const TextArea = (props: Props) => {
  return (
    <div>
      <textarea className={styles.area} {...props} />
    </div>
  )
}

export default TextArea;
