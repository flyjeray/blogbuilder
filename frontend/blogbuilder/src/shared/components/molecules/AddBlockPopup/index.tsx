import { BlockLabels, PostBlockType } from "@/shared/constants/PostBlocks";
import Popup from "@/shared/components/atoms/Popup";
import Button from "@/shared/components/atoms/Button";

type Props = {
  onSelect: (type: PostBlockType) => void;
  onClose: () => void;
}

const AddBlockPopup = ({ onSelect, onClose }: Props) => {
  return (
    <Popup sx={{ left: 'calc(50% - 200px)', bottom: '20px', top: 'auto', width: '400px' }}>
      {/* TODO: fix ts2739 that appears when not using Fragment */}
      <>
        {Object.entries(BlockLabels).map(block => (
          <Button onClick={() => onSelect(block[0] as PostBlockType)}>
            {block[1]}
          </Button>
        ))}
        <Button onClick={onClose} style={{ marginTop: '20px' }}>
          Close
        </Button>
      </>
    </Popup>
  )
}

export default AddBlockPopup;