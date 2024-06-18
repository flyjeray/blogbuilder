import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post"
import PostBlockRenderer from "@/shared/components/molecules/PostBlock";
import styles from './styles.module.scss';
import EditIcon from '@/assets/icons/edit.svg';
import { useState } from "react";
import PostBlockEditPopup from "@/shared/components/organisms/PostBlockEditPopup";

type Props = {
  block: PostBlockContent;
  onBlockSave: (id: string, fields: PostBlockFieldContent[]) => void;
}

const EditablePostBlock = ({ block, onBlockSave }: Props) => {
  const [open, setOpen] = useState(false);

  const handleSave = (fields: PostBlockFieldContent[]) => {
    onBlockSave(block.id, fields);
    setOpen(false);
  }

  return (
    <div className={styles.container}>
      {!open && (
        <button onClick={() => setOpen(true)} type="button" className={styles.edit_button}>
          <img src={EditIcon.src} alt="Edit Icon" />
        </button>
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