import { PostBlockType } from "@/shared/constants/PostBlocks";
import { PostBlockContent, PostContent } from "@/shared/models/Post";

const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const RandomPhoto = (x: number, y: number) => `https://picsum.photos/${x}/${y}`

const MockTextBlock = (id: string, order: number): PostBlockContent => ({
  id,
  type: 'text',
  order,
  fields: [
    {
      id: 't1',
      type: 'text',
      value: LoremIpsum
    }
  ]
})

const MockRImgTextBlock = (id: string, order: number): PostBlockContent => ({
  id,
  type: 'r_img_text',
  order,
  fields: [
    {
      id: 't1',
      type: 'text',
      value: LoremIpsum,
    },
    {
      id: 'i1',
      type: 'img',
      value: RandomPhoto(500, 300)
    }
  ]
})

const MockLImgTextBlock = (id: string, order: number): PostBlockContent => ({
  id,
  type: 'l_img_text',
  order,
  fields: [
    {
      id: 't1',
      type: 'text',
      value: LoremIpsum
    },
    {
      id: 'i1',
      type: 'img',
      value: RandomPhoto(600, 200)
    }
  ]
})

const MockSecondaryTitleBlock = (id: string, order: number): PostBlockContent => ({
  id,
  type: 'secondary_title',
  order,
  fields: [
    {
      id: 't1',
      type: 'text',
      value: 'Secondary Title'
    }
  ]
})

const MockImageBlock = (id: string, order: number): PostBlockContent => ({
  id,
  type: 'img',
  order,
  fields: [
    {
      id: 'i1',
      type: 'img',
      value: RandomPhoto(800, 800)
    }
  ]
})

export const GetMockBlock = (type: PostBlockType, id: string, order: number) => {
  switch (type) {
    case 'text':
      return MockTextBlock(id, order);
    case 'img':
      return MockImageBlock(id, order);
    case 'secondary_title':
      return MockSecondaryTitleBlock(id, order);
    case 'l_img_text':
      return MockLImgTextBlock(id, order);
    case 'r_img_text':
      return MockRImgTextBlock(id, order);
  }
} 

export const MockPost: PostContent = {
  title: 'Mock Post',
  blocks: [
    GetMockBlock('text', 'block1', 1),
    GetMockBlock('secondary_title', 'block4', 2),
    GetMockBlock('img', 'block5', 3),
    GetMockBlock('l_img_text', 'block2', 4),
    GetMockBlock('r_img_text', 'block3', 5)
  ]
}