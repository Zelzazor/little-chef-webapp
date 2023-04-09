import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import confirm from 'antd/es/modal/confirm';
import { FC } from 'react';
import { Submission } from '../../types/submission';

interface DeleteSubmissionButtonProps {
  submission: Submission;
  className?: string;
}

export const DeleteSubmissionButton: FC<DeleteSubmissionButtonProps> = ({
  className,
}) => {
  const confirmDelete = () => {
    return confirm({
      title: 'Are you sure you want to delete this submission?',
      icon: <ExclamationCircleOutlined className="text-red-600" />,
      content: '',
      onOk: () => console.log('deleted'),
      okText: 'Delete',
    });
  };

  return <DeleteOutlined className={`${className}`} onClick={confirmDelete} />;
};
