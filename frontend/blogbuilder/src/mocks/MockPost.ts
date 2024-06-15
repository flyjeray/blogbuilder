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

const MockSecondaryTitleBlock = (id: string): PostBlockContent => ({
  id,
  type: 'secondary_title',
  fields: [
    {
      id: 't1',
      type: 'text',
      value: 'Secondary Title'
    }
  ]
})

const MockImageBlock = (id: string): PostBlockContent => ({
  id,
  type: 'img',
  fields: [
    {
      id: 'i1',
      type: 'img',
      value: RandomPhoto(800, 800)
    }
  ]
})

export const MockPost: PostContent = {
  title: 'Mock Post',
  blocks: [
    MockTextBlock('block1'),
    MockSecondaryTitleBlock('sectitle1'),
    MockImageBlock('img1'),
    MockTextBlock('block3'),
    MockRImgTextBlock('block4'),
    MockSecondaryTitleBlock('sectitle2'),
    MockImageBlock('img2'),
    MockTextBlock('block6'),
    MockLImgTextBlock('block7')
  ]
}