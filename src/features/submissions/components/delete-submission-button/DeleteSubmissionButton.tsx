import { DeleteOutlined, ExclamationCircleOutlined } from '@ant-design/icons';
import { Modal } from 'antd';

import { FC } from 'react';
import { useSubmissions } from '../../hooks/useSubmissions';
import { Submission } from '../../types/submission';

interface DeleteSubmissionButtonProps {
  submission: Submission;
  className?: string;
}

export const DeleteSubmissionButton: FC<DeleteSubmissionButtonProps> = ({
  className,
  submission,
}) => {
  const { useDeleteSubmission } = useSubmissions();
  const { mutate: deleteSubmission } = useDeleteSubmission({
    submissionId: submission.id,
  });

  const { confirm } = Modal;

  const confirmDelete = () => {
    return confirm({
      title: 'Are you sure you want to delete this submission?',
      icon: <ExclamationCircleOutlined />,
      content: '',
      onOk: () => deleteSubmission(),
      okText: 'Delete',
      okType: 'danger',
      cancelText: 'Cancel',
      cancelButtonProps: {},
    });
  };

  return <DeleteOutlined className={`${className}`} onClick={confirmDelete} />;
};
