import { PostPreviewDetails } from "@/shared/models/PostDetails";

export const MockPostsPreviewDetails: PostPreviewDetails[] = [
  {
    id: 'post1',
    title: "A very interesting post about turtles",
    views: 5423,
    createdAt: new Date().getTime(),
  },
  {
    id: 'post2',
    title: "New York restaurants",
    views: 80,
    createdAt: new Date().getTime(),
  },
  {
    id: 'post3',
    title: "The funniest cats",
    views: 92310,
    createdAt: new Date().getTime(),
  }
]