'use client'

import TextInput from '@/shared/components/atoms/TextInput';
import styles from './styles.module.scss';
import { MockPost } from '@/mocks/MockPost';
import { FormEvent, useState } from 'react';
import { PostBlockContent } from '@/shared/models/Post';
import EditablePostBlock from '@/shared/components/organisms/EditablePostBlock';
import AddBlockButton from '@/shared/components/atoms/AddBlockButton';
import AddBlockPopup from '@/shared/components/molecules/AddBlockPopup';
import { PostBlockType } from '@/shared/constants/PostBlocks';

type Props = {
  params: {
    slug: string;
  }
}

const AdminEditPostPage = ({ params }: Props) => {
  const [title, setTitle] = useState<string>(MockPost.title);
  const [blocks, setBlocks] = useState<PostBlockContent[]>(MockPost.blocks);
  const [addPopupOpen, setAddPopupOpen] = useState(false);

  const handleChangeTitle = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }

  const handleAddBlock = (type: PostBlockType) => {
    setAddPopupOpen(false);
  }

  const handleSave = (block: PostBlockContent) => {
    const copy = [...blocks];
    const i = copy.findIndex(b => b.id == block.id);
    if (i !== -1) {
      copy[i] = block;
    }
    setBlocks(copy);
  }

  return (
    <main className={styles.container}>
      <TextInput
        onChange={handleChangeTitle}
        placeholder="Post Title"
        value={title}
      />
      {blocks.map(block => (
        <EditablePostBlock
          key={block.id}
          data={block}
          onSave={handleSave}
        />
      ))}
      {!addPopupOpen && (
        <AddBlockButton 
          onClick={() => setAddPopupOpen(true)}
        />
      )}
      {addPopupOpen && (
        <AddBlockPopup 
          onSelect={handleAddBlock}
          onClose={() => setAddPopupOpen(false)}
        />
      )}
    </main>
  )
}

export default AdminEditPostPage;
