import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post"
import PostBlockRenderer from "@/shared/components/molecules/PostBlock";
import styles from './styles.module.scss';
import EditIcon from '@/assets/icons/edit.svg';
import { HTMLProps, useState } from "react";
import PostBlockEditFields from "./PostBlockEditFields";
import Button from "@/shared/components/atoms/Button";

type EditButtonProps = HTMLProps<HTMLButtonElement>;

const EditButton = (props: EditButtonProps) => {
  return (
    <button {...props} type="button" className={styles.edit_button}>
      <img src={EditIcon.src} alt="Edit Icon" />
    </button>
  )
}

type BlockEditDropdownProps = {
  block: PostBlockContent;
  onSave: (data: PostBlockContent) => void;
  onCancel: () => void;
}

const BlockEditDropdown = ({ block, onSave, onCancel }: BlockEditDropdownProps) => {
  const [data, setData] = useState(block);

  const handleChange = (fields: PostBlockFieldContent[]) => {
    setData(prev => ({
      ...prev,
      fields
    }))
  }

  return (
    <div className={styles.edit_dropdown}>
      <PostBlockEditFields
        block={data}
        onChange={handleChange}
      />
      <Button onClick={() => onSave(data)}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </div>
  )
}

type Props = {
  data: PostBlockContent;
  onSave: (data: PostBlockContent) => void;
}

const EditablePostBlock = ({ data, onSave }: Props) => {
  const [open, setOpen] = useState(false);

  const handleOpen = () => {
    setOpen(true);
  }

  const handleClose = () => {
    setOpen(false);
  }

  const handleSave = (data: PostBlockContent) => {
    onSave(data);
    setOpen(false);
  }

  return (
    <div className={styles.container}>
      {!open && (
        <EditButton
          onClick={handleOpen}
        />
      )}
      {open && (
        <BlockEditDropdown
          onSave={handleSave}
          onCancel={handleClose}
          block={data}
        />
      )}
      <PostBlockRenderer block={data} />
    </div>
  )
};

export default EditablePostBlock;