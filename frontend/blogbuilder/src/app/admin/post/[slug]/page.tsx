'use client'

import TextInput from '@/shared/components/atoms/TextInput';
import styles from './styles.module.scss';
import { GetMockBlock, MockPost } from '@/mocks/MockPost';
import { FormEvent, useMemo, useState } from 'react';
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

  const sortedBlocks = useMemo(() => {
    return blocks.sort((x, y) => x.order - y.order);
  }, [blocks]);

  const handleChangeTitle = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  }

  const handleAddBlock = (type: PostBlockType) => {
    setBlocks(prev => [
      ...prev, 
      GetMockBlock(
        type, 
        new Date().getTime().toString(), 
        sortedBlocks[sortedBlocks.length - 1].order + 1
      )
    ]);
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

  const handleMoveBlock = (id: string, directionUp: boolean) => {
    const blockIndex = blocks.findIndex(block => block.id == id);
    const blockIndexAtSorted = sortedBlocks.findIndex(block => block.id == id);

    if (blockIndex !== -1 && blockIndexAtSorted !== -1) {
      const swapBlockIndex = blocks.findIndex(block => block.id == sortedBlocks[blockIndexAtSorted + (directionUp ? -1 : 1)].id)

      if (swapBlockIndex !== -1) {
        const swapBlock = blocks[swapBlockIndex];

        const updatedBlocks = [...blocks];
        [updatedBlocks[blockIndex].order, updatedBlocks[swapBlockIndex].order] = [swapBlock.order, blocks[blockIndex].order];
  
        setBlocks(updatedBlocks);
      }
    }
  } 

  return (
    <main className={styles.container}>
      <div className={styles.content}>
        <TextInput
          onChange={handleChangeTitle}
          placeholder="Post Title"
          value={title}
        />
        {sortedBlocks.map(block => (
          <EditablePostBlock
            key={block.id}
            block={block}
            onBlockSave={handleSaveBlock}
            onBlockDelete={() => handleDeleteBlock(block.id)}
            onBlockMove={directionUp => handleMoveBlock(block.id, directionUp)}
            isFirst={sortedBlocks[0].id == block.id}
            isLast={sortedBlocks[sortedBlocks.length - 1].id == block.id}
          />
        ))}
        <AddBlockButton 
          onClick={() => setAddPopupOpen(!addPopupOpen)}
          isOpened={addPopupOpen}
        />
        {addPopupOpen && (
          <AddBlockPopup 
            onSelect={handleAddBlock}
            onClose={() => setAddPopupOpen(false)}
            openUpwards={blocks.length > 3}
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
