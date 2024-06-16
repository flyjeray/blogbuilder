import styles from './styles.module.scss';

type Props = {
  onClick: () => void;
}

const AddBlockButton = ({ onClick }: Props) => {
  return (
    <button className={styles.wrapper} onClick={onClick}>
      <p className={styles.inner}>+</p>
    </button>
  )
}

export default AddBlockButton;