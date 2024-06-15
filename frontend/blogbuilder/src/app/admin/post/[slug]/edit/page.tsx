'use client'

import TextInput from '@/shared/components/atoms/TextInput';
import styles from './styles.module.scss';
import { MockPost } from '@/mocks/MockPost';
import { FormEvent, useState } from 'react';
import { PostBlockContent } from '@/shared/models/Post';
import EditablePostBlock from '@/shared/components/organisms/EditablePostBlock';

type Props = {
  params: {
    slug: string;
  }
}

const AdminEditPostPage = ({ params }: Props) => {
  const [title, setTitle] = useState<string>(MockPost.title);
  const [blocks, setBlocks] = useState<PostBlockContent[]>(MockPost.blocks);

  const handleChangeTitle = (e: FormEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
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
    </main>
  )
}

export default AdminEditPostPage;
