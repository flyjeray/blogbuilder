import { HTMLProps } from "react"
import styles from './styles.module.scss';

type Props = {
  variant?: 'large' | 'regular';
} & HTMLProps<HTMLInputElement>;

const TextInput = (props: Props) => {
  return (
    <div className={styles.textinput_container}>
      {props.title && (
        <p className={styles.title}>
          {props.title}
        </p>
      )}
      <input className={styles[`input_${props.variant || 'regular'}`]} {...props} />
    </div>
  )
}

export default TextInput;