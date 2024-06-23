'use client'

import { MockPostsPreviewDetails } from "@/mocks/MockPostsDetails";
import { PostPreviewDetails } from "@/shared/models/PostDetails";
import { useState } from "react";
import styles from './styles.module.scss';
import PostPreviewCard from "@/shared/components/atoms/PostPreviewCard";

const AdminRootPage = () => {
  const [posts, setPosts] = useState<PostPreviewDetails[]>(MockPostsPreviewDetails);

  const handleDeletePost = (id: string, title: string) => {
    if (confirm(`Are you sure you want to delete post "${title}"?`)) {
      setPosts(prev => prev.filter(post => post.id !== id));
    }
  }

  return (
    <main className={styles.container}>
      <h1>Admin Root Page</h1>
      <div className={styles.list_container}>
        {posts.map(post => (
          <PostPreviewCard
            post={post} 
            adminActionsEnabled={true}
            onDelete={() => handleDeletePost(post.id, post.title)}
          />
        ))}
      </div>
    </main>
  )
}

export default AdminRootPage;
