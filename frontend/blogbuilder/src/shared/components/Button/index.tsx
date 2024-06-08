import { HTMLProps } from "react";
import styles from './styles.module.scss';

type Props = HTMLProps<HTMLButtonElement>;

const Button = (props: Props) => {
  return (
    <button className={styles.button} {...props} type="button" />
  )
}

export default Button;