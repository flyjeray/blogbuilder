import { PostBlockFieldContent } from "@/shared/models/Post";
import FieldEditInput from "@/shared/components/atoms/FieldEditInput";

type Props = {
  fields: PostBlockFieldContent[];
  onChange: (id: string, value: string) => void;
};

const PostBlockEditFields = ({ fields, onChange }: Props) => {
  return (
    <>
      {fields.map(field => (
        <FieldEditInput
          key={field.id}
          field={field}
          onChange={value => onChange(field.id, value)}
        />
      ))}
    </>
  )
}

export default PostBlockEditFields;