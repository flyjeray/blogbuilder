import { PostBlockFieldContent } from "@/shared/models/Post";
import TextArea from "@/shared/components/atoms/TextArea";
import TextInput from "@/shared/components/atoms/TextInput";

type Props = {
  field: PostBlockFieldContent;
  onChange: (value: string) => void;
};

const FieldEditInput = ({ field, onChange }: Props) => {
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

export default FieldEditInput;
