import { CSSProperties } from 'react';
import styles from './styles.module.scss';

type Props = {
  children: JSX.Element[] | JSX.Element;
  sx: CSSProperties;
}

const Popup = ({ children, sx }: Props) => {
  return (
    <div 
      className={styles.popup}
      style={sx}
    >
      {children}
    </div>
  )
}

export default Popup;