'use client'

import TextInput from '@/shared/components/atoms/TextInput';
import styles from './styles.module.scss';
import { GetMockBlock, MockPost } from '@/mocks/MockPost';
import { FormEvent, useState } from 'react';
import { PostBlockContent, PostBlockFieldContent } from '@/shared/models/Post';
import EditablePostBlock from '@/shared/components/organisms/EditablePostBlock';
import AddBlockButton from '@/shared/components/atoms/AddBlockButton';
import AddBlockPopup from '@/shared/components/molecules/AddBlockPopup';
import { PostBlockType } from '@/shared/constants/PostBlocks';
import Button from '@/shared/components/atoms/Button';

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
    setBlocks(prev => [...prev, GetMockBlock(type, new Date().getTime().toString())])
    setAddPopupOpen(false);
  }

  const handleSaveBlock = (id: string, fields: PostBlockFieldContent[]) => {
    const copy = [...blocks];
    const i = copy.findIndex(b => b.id == id);
    if (i !== -1) {
      copy[i].fields = fields;
    }
    setBlocks(copy);
  }

  const handleDeleteBlock = (id: string) => {
    setBlocks(prev => prev.filter(b => b.id !== id))
  }

  const handleSavePost = () => {
    console.log('Save Post');
  }

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <TextInput
          onChange={handleChangeTitle}
          placeholder="Post Title"
          value={title}
        />
        {blocks.map(block => (
          <EditablePostBlock
            key={block.id}
            block={block}
            onBlockSave={handleSaveBlock}
            onBlockDelete={() => handleDeleteBlock(block.id)}
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
      </div>
      <div className={styles.save_btn_wrapper}>
        <Button 
          variant="large"
          onClick={handleSavePost}
        >
          Save
        </Button>
      </div>
    </main>
  )
}

export default AdminEditPostPage;
