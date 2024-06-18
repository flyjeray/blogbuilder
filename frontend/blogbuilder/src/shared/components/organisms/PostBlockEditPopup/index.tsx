import { PostBlockContent, PostBlockFieldContent } from "@/shared/models/Post";
import Button from "@/shared/components/atoms/Button";
import Popup from "@/shared/components/atoms/Popup";
import PostBlockEditFields from "@/shared/components/molecules/PostBlockEditFields";
import { useMemo, useState } from "react";

type Props = {
  block: PostBlockContent;
  onSave: (data: PostBlockFieldContent[]) => void;
  onCancel: () => void;
}

const PostBlockEditPopup = ({ block, onSave, onCancel }: Props) => {
  const [data, setData] = useState(block.fields);

  const indexedIdMap = useMemo(() => {
    const map: Record<string, number> = {};

    data.forEach((field, i) => {
      map[field.id] = i;
    });

    return map;
  }, [data]);

  const handleChange = (id: string, value: string) => {
    const copy = [...data];
    copy[indexedIdMap[id]].value = value;
    setData(copy);
  }

  return (
    <Popup sx={{ top: '8px', left: '8px' }}>
      <PostBlockEditFields
        fields={data}
        onChange={handleChange}
      />
      <Button onClick={() => onSave(data)}>Save</Button>
      <Button onClick={onCancel}>Cancel</Button>
    </Popup>
  )
}

export default PostBlockEditPopup;