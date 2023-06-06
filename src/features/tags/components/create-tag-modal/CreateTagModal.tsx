import { PlusCircleOutlined } from '@ant-design/icons';
import { Button, Input, Modal } from 'antd';

interface CreateIngredientModalProps {
  tagModalVisible: boolean;
  setTagModalVisible: (visible: boolean) => void;
  onSubmitTag: (event: React.FormEvent<HTMLFormElement>) => void;
}

export const CreateTagModal = ({
  tagModalVisible,
  setTagModalVisible,
  onSubmitTag,
}: CreateIngredientModalProps) => {
  return (
    <Modal
      title="Create Tag"
      open={tagModalVisible}
      onCancel={() => setTagModalVisible(false)}
      closable
      footer={null}
    >
      <form
        onSubmit={onSubmitTag}
        className="flex flex-col gap-2"
        id="submitIngredientForm"
      >
        <label htmlFor="tag_name">Name</label>
        <Input
          placeholder="Name"
          allowClear
          required
          name="tag_name"
          id="tag_name"
        />
        <Button
          type="primary"
          block
          icon={<PlusCircleOutlined />}
          htmlType="submit"
        >
          Create Tag
        </Button>
      </form>
    </Modal>
  );
};
