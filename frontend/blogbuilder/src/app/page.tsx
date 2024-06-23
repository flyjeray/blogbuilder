import { PostPreviewDetails } from '@/shared/models/PostDetails';
import styles from './styles.module.scss';
import { MockPostsPreviewDetails } from '@/mocks/MockPostsDetails';
import { useState } from 'react';
import PostPreviewCard from '@/shared/components/atoms/PostPreviewCard';

const getPosts = async (): Promise<PostPreviewDetails[]> => MockPostsPreviewDetails;

const Home = async () => {
  const posts = await getPosts();

  return (
    <main className={styles.container}>
      <div className={styles.list_container}>
        {posts.map(post => (
          <PostPreviewCard
            post={post} 
            adminActionsEnabled={false}
          />
        ))}
      </div>
    </main>
  )
}

export default Home;
