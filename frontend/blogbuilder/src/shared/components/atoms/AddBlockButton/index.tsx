import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
  isOpened: boolean;
}

const AddBlockButton = ({ onClick, isOpened }: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <p className={`${styles.inner} ${isOpened && `${styles.rotated}`}`}>+</p>
    </button>
  )
}

export default AddBlockButton;