'use client'

import TextInput from '@/shared/components/TextInput';
import styles from './styles.module.scss';
import { MockPost } from '@/mocks/MockPost';
import { FormEvent, useState } from 'react';
import { PostBlockContent } from '@/shared/models/Post';
import EditablePostBlock from '@/shared/components/EditablePostBlock';

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

  return (
    <main className={styles.container}>
      <TextInput
        defaultValue={MockPost.title}
        onChange={handleChangeTitle}
        placeholder="Post Title"
      />
      {blocks.map(block => (
        <EditablePostBlock key={block.id} data={block} />
      ))}
    </main>
  )
}

export default AdminEditPostPage;
