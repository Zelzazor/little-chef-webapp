import { Pagination, Table } from 'antd';
import { ColumnsType } from 'antd/es/table';
import React, { useState } from 'react';
import { useUsers } from '../../hooks/useUsers';
import { Warning } from '../../types/warning';

interface UserWarningsProps {
  userId: string;
}

export const UserWarnings: React.FC<UserWarningsProps> = ({ userId }) => {
  const { useGetUserWarningsPaginated } = useUsers();

  const [paginationSettings, setPaginationSettings] = useState({
    page: 1,
    pageSize: 10,
  });
  const { data, isLoading, isError } = useGetUserWarningsPaginated(
    userId,
    paginationSettings,
  );

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (isError || !data) {
    return <div>Error loading warnings...</div>;
  }

  const columns: ColumnsType<Warning> = [
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Date',
      dataIndex: 'createdAt',
      key: 'createdAt',
      render: (date: Date) => new Date(date).toLocaleDateString(),
    },
  ];

  return (
    <>
      <Table
        pagination={false}
        dataSource={data.data}
        columns={columns}
        rowKey="id"
      />
      <Pagination
        className="mx-auto"
        defaultPageSize={10}
        pageSizeOptions={['10', '20', '30', '40']}
        pageSize={paginationSettings.pageSize}
        showSizeChanger
        defaultCurrent={paginationSettings.page}
        total={data.pagination?.totalItems}
        onChange={(page, pageSize) => {
          if (pageSize) setPaginationSettings({ page, pageSize });
        }}
      />
    </>
  );
};

export default UserWarnings;
