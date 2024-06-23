import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post"
import PostBlockRenderer from "@/shared/components/molecules/PostBlock";
import styles from './styles.module.scss';
import EditIcon from '@/assets/icons/edit.svg';
import DeleteIcon from '@/assets/icons/trash.svg';
import ArrowUpIcon from '@/assets/icons/arrow-up.svg';
import CopyIcon from '@/assets/icons/copy.svg';
import { useState } from "react";
import PostBlockEditPopup from "@/shared/components/organisms/PostBlockEditPopup";

type Props = {
  block: PostBlockContent;
  onBlockSave: (id: string, fields: PostBlockFieldContent[]) => void;
  onBlockDelete: () => void;
  onBlockMove: (directionUp: boolean) => void;
  onCopy: () => void;
  isFirst: boolean;
  isLast: boolean;
}

const EditablePostBlock = ({ 
  block, 
  onBlockSave, 
  onBlockDelete, 
  onBlockMove,
  onCopy,
  isFirst,
  isLast
}: Props) => {
  const [open, setOpen] = useState(false);

  const handleSave = (fields: PostBlockFieldContent[]) => {
    onBlockSave(block.id, fields);
    setOpen(false);
  }

  const handleDelete = () => {
    if (confirm(`Are you sure you want to delete block ${block.id}?`)) {
      onBlockDelete();
    }
  }

  const handleMoveUp = () => {
    if (!isFirst) {
      onBlockMove(true);
    }
  }

  const handleMoveDown = () => {
    if (!isLast) {
      onBlockMove(false);
    }
  }

  const handleCopy = () => {
    onCopy();
  }

  return (
    <div className={styles.container}>
      {!open && (
        <div className={styles.on_hover_block}>
          <button onClick={() => setOpen(true)} type="button">
            <img src={EditIcon.src} alt="Edit Icon" />
          </button>
          {!isFirst && (
            <button onClick={handleMoveUp} type="button">
              <img src={ArrowUpIcon.src} alt="Arrow Up Icon" />
            </button>
          )}
          {!isLast && (
            <button onClick={handleMoveDown} type="button">
              <img src={ArrowUpIcon.src} alt="Arrow Down Icon" style={{ transform: 'rotate(180deg)' }} />
            </button>
          )}
          <button onClick={handleCopy} type="button">
            <img src={CopyIcon.src} alt="Copy Icon" />
          </button>
          <button onClick={handleDelete} type="button" style={{ backgroundColor: 'red' }}>
            <img src={DeleteIcon.src} alt="Delete Icon" />
          </button>
        </div>
      )}
      {open && (
        <PostBlockEditPopup 
          block={block}
          onSave={data => handleSave(data)}
          onCancel={() => setOpen(false)}
        />
      )}
      <PostBlockRenderer block={block} />
    </div>
  )
};

export default EditablePostBlock;