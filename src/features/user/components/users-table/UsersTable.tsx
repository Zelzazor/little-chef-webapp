// UsersTable.tsx
import { Button, Form, Input, Modal, Pagination, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { Pagination as PaginationResponse } from '../../../utility/types/pagination';
import { useUsers } from '../../hooks/useUsers';
import { BasePaginationQueryDto } from '../../types/base-pagination-query.dto';
import { User } from '../../types/user';
import { UserWarnings } from './UserWarnings';

interface UsersTableProps {
  users: User[];
  paginationSettings: BasePaginationQueryDto;
  pagination: PaginationResponse | undefined;
  setPaginationSettings: (paginationSettings: BasePaginationQueryDto) => void;
}

export const UsersTable: React.FC<UsersTableProps> = ({
  users,
  paginationSettings,
  pagination,
  setPaginationSettings,
}) => {
  const { banUserMutation, unbanUserMutation, createWarningMutation } =
    useUsers();
  const { mutate: banUser } = banUserMutation;
  const { mutate: unbanUser } = unbanUserMutation;
  const { mutate: createWarning } = createWarningMutation;
  const [selectedUserId, setSelectedUserId] = useState<string | null>(null);
  const [showWarningForm, setShowWarningForm] = useState(false);

  const [form] = Form.useForm();

  const handleFinish = async (values: { description: string }) => {
    if (selectedUserId) {
      createWarning({
        userId: selectedUserId,
        description: values.description,
      });
      // Reset the form after successful submit
      form.resetFields();
      setSelectedUserId(null);
      setShowWarningForm(false);
    }
  };

  const columns: ColumnsType<User> = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'Role',
      key: 'Role',
      render: (role) => role.name,
    },
    {
      title: 'Status',
      dataIndex: 'bannedAt',
      key: 'status',
      render: (bannedAt: Date | null) => (
        <span
          style={{
            color: bannedAt ? 'red' : 'green',
            fontWeight: 'bold',
          }}
        >
          {bannedAt ? 'Banned' : 'Active'}
        </span>
      ),
    },
    {
      title: 'Actions',
      key: 'action',
      render: (user: User) => (
        <Space size="middle">
          <Button
            type="primary"
            style={{
              backgroundColor: 'Goldenrod',
              borderColor: 'Goldenrod',
              color: 'White',
            }}
            onClick={() => setSelectedUserId(user.id)} // set selected user when "View Warnings" button is clicked
          >
            View Warnings
          </Button>
          <Button
            type="primary"
            onClick={() => {
              setSelectedUserId(user.id);
              setShowWarningForm(true);
            }}
          >
            Warn
          </Button>
          <Button
            type="primary"
            danger={!user.bannedAt}
            onClick={() =>
              user.bannedAt ? unbanUser(user.id) : banUser(user.id)
            }
          >
            {user.bannedAt ? 'Unban' : 'Ban'}
          </Button>
        </Space>
      ),
    },
  ];

  return (
    <>
      <Table
        pagination={false}
        dataSource={users}
        columns={columns}
        rowKey="id"
      />

      <Modal
        title="Create a warning for user"
        open={!!selectedUserId && showWarningForm}
        onCancel={() => {
          setSelectedUserId(null);
          setShowWarningForm(false);
          // Reset the form when the modal is closed
          form.resetFields();
        }}
        onOk={() => {
          setSelectedUserId(null);
          setShowWarningForm(false);
        }}
      >
        <Form form={form} onFinish={handleFinish}>
          <Form.Item
            label="Description"
            name="description"
            rules={[
              {
                required: true,
                message: 'Please input a warning description!',
              },
            ]}
            labelCol={{ span: 24 }} // Set label column to span the full width
            wrapperCol={{ span: 24 }} // Set wrapper column to span the full width
          >
            <Input />
          </Form.Item>
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="User Warnings"
        open={!!selectedUserId && !showWarningForm}
        onCancel={() => {
          setSelectedUserId(null);
        }}
        onOk={() => {
          setSelectedUserId(null);
        }}
      >
        <UserWarnings userId={selectedUserId ?? ''} />
      </Modal>

      <div className="w-full flex my-4">
        <Pagination
          className="mx-auto"
          defaultPageSize={12}
          pageSizeOptions={['12', '24', '48']}
          pageSize={paginationSettings.pageSize}
          showSizeChanger
          defaultCurrent={paginationSettings.page}
          total={pagination?.totalItems}
          onChange={(page, pageSize) => {
            setPaginationSettings({ ...paginationSettings, page, pageSize });
          }}
        />
      </div>
    </>
  );
};
