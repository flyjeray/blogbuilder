import { CSSProperties } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element[] | JSX.Element;
  sx?: CSSProperties;
  extraClass?: string;
}

const Popup = ({ children, sx, extraClass }: Props) => {
  return (
    <div 
      className={[styles.popup, extraClass].join(" ")}
      style={sx}
    >
      {children}
    </div>
  )
}

export default Popup;