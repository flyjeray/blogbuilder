import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post"
import PostBlockRenderer from "@/shared/components/molecules/PostBlock";
import styles from './styles.module.scss';
import EditIcon from '@/assets/icons/edit.svg';
import DeleteIcon from '@/assets/icons/trash.svg';
import { useState } from "react";
import PostBlockEditPopup from "@/shared/components/organisms/PostBlockEditPopup";

type Props = {
  block: PostBlockContent;
  onBlockSave: (id: string, fields: PostBlockFieldContent[]) => void;
  onBlockDelete: () => void;
}

const EditablePostBlock = ({ block, onBlockSave, onBlockDelete }: Props) => {
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

  return (
    <div className={styles.container}>
      {!open && (
        <div className={styles.on_hover_block}>
          <button 
            onClick={() => setOpen(true)} 
            type="button"
            style={{ backgroundColor: 'white' }}
          >
            <img src={EditIcon.src} alt="Edit Icon" />
          </button>
          <button 
            onClick={handleDelete} 
            type="button" 
            style={{ backgroundColor: 'red' }}
          >
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