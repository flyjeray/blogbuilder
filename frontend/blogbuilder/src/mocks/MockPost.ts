import { PostBlockContent, PostContent } from "@/shared/models/Post";

const LoremIpsum = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const RandomPhoto = (x: number, y: number) => `https://picsum.photos/${x}/${y}`

const MockTextBlock = (id: string): PostBlockContent => ({
  id,
  type: 'text',
  fields: [
    {
      id: 't1',
      type: 'text',
      value: LoremIpsum
    }
  ]
})

const MockRImgTextBlock = (id: string): PostBlockContent => ({
  id,
  type: 'r_img_text',
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

const MockLImgTextBlock = (id: string): PostBlockContent => ({
  id,
  type: 'l_img_text',
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

export const MockPost: PostContent = {
  title: 'Mock Post',
  blocks: [
    MockTextBlock('block1'),
    MockLImgTextBlock('block2'),
    MockTextBlock('block3'),
    MockRImgTextBlock('block4'),
    MockTextBlock('block5'),
    MockTextBlock('block6')
  ]
}