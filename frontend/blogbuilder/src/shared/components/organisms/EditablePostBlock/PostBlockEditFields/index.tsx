import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post";
import TextInput from "@/shared/components/atoms/TextInput";
import { useMemo } from "react";
import TextArea from "@/shared/components/atoms/TextArea";

type SingleFieldProps = {
  field: PostBlockFieldContent;
  onChange: (value: string) => void;
};

const SingleFieldEditField = ({ field, onChange }: SingleFieldProps) => {
  switch (field.type) {
    case 'text':
      return (
        <TextArea
          title="Text"
          placeholder="Enter your value here"
          defaultValue={field.value}
          onChange={e => onChange(e.currentTarget.value)}
          rows={5}
        />
      );
    case 'img':
      return (
        <TextInput
          title="Image Link"
          placeholder="Enter your value here"
          defaultValue={field.value}
          onChange={e => onChange(e.currentTarget.value)}
        />
      );
  }
}

type Props = {
  block: PostBlockContent;
  onChange: (data: PostBlockFieldContent[]) => void;
};

const PostBlockEditFields = ({ block, onChange }: Props) => {
  const indexMap = useMemo(
    () => {
      const map: Record<string, number> = {};
      block.fields.forEach((f, i) => { map[f.id] = i });
      return map;
    },
    [block]
  )

  const handleChange = (id: string, value: string) => {
    const fields = [...block.fields];
    fields[indexMap[id]].value = value;
    onChange(fields);
  }

  return (
    <>
      {block.fields.map(field => (
        <SingleFieldEditField
          key={field.id}
          field={field}
          onChange={value => handleChange(field.id, value)}
        />
      ))}
    </>
  )
}

export default PostBlockEditFields;