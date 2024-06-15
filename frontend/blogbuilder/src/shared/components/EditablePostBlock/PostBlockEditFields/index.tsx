import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post";
import TextInput from "../../TextInput";
import { useMemo, useState } from "react";
import TextArea from "../../TextArea";

type SingleFieldProps = {
  field: PostBlockFieldContent;
  onChange: (value: string) => void;
};

const SingleFieldEditField = ({ field, onChange }: SingleFieldProps) => {
  switch (field.type) {
    case 'text':
      return (
        <TextArea
          placeholder="Text"
          defaultValue={field.value}
          onChange={e => onChange(e.currentTarget.value)}
          rows={5}
        />
      );
    case 'img':
      return (
        <TextInput
          placeholder="Image"
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