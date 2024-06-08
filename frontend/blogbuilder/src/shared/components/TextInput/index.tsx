import { HTMLProps } from "react"
import styles from './styles.module.scss';

type Props = HTMLProps<HTMLInputElement>;

const TextInput = (props: Props) => {
  return (
    <div style={{ position: 'relative' }}>
      <input className={styles.input} {...props} />
    </div>
  )
}

export default TextInput;