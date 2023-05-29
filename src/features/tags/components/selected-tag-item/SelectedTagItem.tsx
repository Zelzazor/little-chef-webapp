import { DeleteOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { Tag } from '../../types/tag';

interface SelectedTagItemProps {
  tag: Partial<Tag>;
  removeTag: (id: string) => void;
}

export const SelectedTagItem = ({ tag, removeTag }: SelectedTagItemProps) => {
  return (
    <div
      key={tag.id}
      className="flex gap-2 border border-[#33ca60] py-2  rounded-md px-2  hover:bg-slate-100 justify-between"
    >
      <div className="flex flex-col gap-2 py-10">
        <p className="text-lg font-bold mx-10">{tag.name}</p>
      </div>
      {tag.tagType?.name !== 'Difficulty' && (
        <Button
          danger
          type="primary"
          icon={<DeleteOutlined />}
          onClick={() => removeTag(tag.id ?? '')}
        />
      )}
    </div>
  );
};
