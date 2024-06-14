import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post"
import PostBlockRenderer from "../PostBlock";
import styles from './styles.module.scss';
import EditIcon from '@/assets/icons/edit.svg';
import { HTMLProps, useState } from "react";
import PostBlockEditFields from "./PostBlockEditFields";
import Button from "../Button";

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
}

const BlockEditDropdown = ({ block, onSave }: BlockEditDropdownProps) => {
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
          block={data}
        />
      )}
      <PostBlockRenderer block={data} />
    </div>
  )
};

export default EditablePostBlock;