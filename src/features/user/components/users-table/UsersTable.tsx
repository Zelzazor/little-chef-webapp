import { Button, Pagination, Space, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React from 'react';
import { Pagination as PaginationResponse } from '../../../utility/types/pagination';
import { BasePaginationQueryDto } from '../../types/base-pagination-query.dto';
import { User } from '../../types/user';

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
      title: 'Actions',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button
            type="primary"
            style={{
              backgroundColor: 'Goldenrod',
              borderColor: 'Goldenrod',
              color: 'White',
            }}
          >
            Warnings
          </Button>
          <Button type="primary" danger>
            Ban
          </Button>
        </Space>
      ),
    },
    // add more columns as needed
  ];
  return (
    <>
      <Table
        pagination={false}
        dataSource={users}
        columns={columns}
        rowKey="id"
      />
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
