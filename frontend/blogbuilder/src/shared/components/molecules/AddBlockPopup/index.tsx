import { BlockLabels, PostBlockType } from "@/shared/constants/PostBlocks";
import Popup from "@/shared/components/atoms/Popup";
import Button from "@/shared/components/atoms/Button";
import styles from './styles.module.scss';

type Props = {
  onSelect: (type: PostBlockType) => void;
  onClose: () => void;
  openUpwards: boolean;
}

const AddBlockPopup = ({ onSelect, onClose, openUpwards }: Props) => {
  return (
    <Popup extraClass={styles[`popup_extra_styles${openUpwards ? `_upwards` : ''}`]}>
      {/* TODO: fix ts2739 that appears when not using Fragment */}
      <>
        <div className={styles.options}>
          {Object.entries(BlockLabels).map(block => (
            <Button onClick={() => onSelect(block[0] as PostBlockType)}>
              {block[1]}
            </Button>
          ))}
        </div>
        <Button onClick={onClose} style={{ marginTop: '20px' }}>
          Close
        </Button>
      </>
    </Popup>
  )
}

export default AddBlockPopup;