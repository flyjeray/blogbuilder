import { HTMLProps } from "react";
import styles from './styles.module.scss';

type Props = HTMLProps<HTMLTextAreaElement>;

const TextArea = (props: Props) => {
  return (
    <div className={styles.textarea_container}>
      {props.title && (
        <p className={styles.title}>
          {props.title}
        </p>
      )}
      <textarea className={styles.area} {...props} />
    </div>
  )
}

export default TextArea;
