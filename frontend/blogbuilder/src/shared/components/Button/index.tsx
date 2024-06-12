import { HTMLProps } from "react";
import styles from './styles.module.scss';

type Props = {
  variant?: 'large' | 'regular';
} & HTMLProps<HTMLButtonElement>;

const Button = (props: Props) => {
  return (
    <button className={styles[`button_${props.variant || 'regular'}`]} {...props} type="button" />
  )
}

export default Button;