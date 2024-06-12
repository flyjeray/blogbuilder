import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post";
import TextInput from "../../TextInput";

type SingleFieldProps = { field: PostBlockFieldContent };

const SingleFieldEditField = ({ field }: SingleFieldProps) => {
  switch (field.type) {
    case 'text':
      return <TextInput placeholder="Text" defaultValue={field.value} />;
    case 'img':
      return <TextInput placeholder="Image" defaultValue={field.value} />
  }
}

type Props = { block: PostBlockContent }

const PostBlockEditFields = ({ block }: Props) => {
  return (
    <>
      {block.fields.map(field => <SingleFieldEditField key={field.id} field={field} />)}
    </>
  )
}

export default PostBlockEditFields;