'use client'

import { MockPostsPreviewDetails } from "@/mocks/MockPostsDetails";
import { PostPreviewDetails } from "@/shared/models/PostDetails";
import { useState } from "react";
import styles from './styles.module.scss';
import PostPreviewCard from "@/shared/components/atoms/PostPreviewCard";

const AdminRootPage = () => {
  const [posts, setPosts] = useState<PostPreviewDetails[]>(MockPostsPreviewDetails);

  return (
    <main className={styles.container}>
      <h1>Admin Root Page</h1>
      <div className={styles.list_container}>
        {posts.map(post => (
          <PostPreviewCard
            post={post} 
            adminActions={true}
          />
        ))}
      </div>
    </main>
  )
}

export default AdminRootPage;
