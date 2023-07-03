// Users.tsx

import React, { useState } from 'react';
import { UsersTable } from '../../features/user/components/users-table/UsersTable';
import { useUsers } from '../../features/user/hooks/useUsers';
import { BasePaginationQueryDto } from '../../features/user/types/base-pagination-query.dto';

export const Users: React.FC = () => {
  const [paginationQuery, setPaginationQuery] =
    useState<BasePaginationQueryDto>({ page: 1, pageSize: 10 });
  const { useGetAllUsers } = useUsers();
  const { data, isLoading } = useGetAllUsers(paginationQuery);

  if (isLoading) {
    return <div>Loading...</div>; // you can replace this with a spinner or a loading state
  }

  return (
    <div className="mx-6">
      <h1 className="text-3xl font-bold mb-4">Users</h1>
      <UsersTable
        users={data?.data || []}
        pagination={data?.pagination}
        paginationSettings={paginationQuery}
        setPaginationSettings={setPaginationQuery}
      />
      {/* you may want to add pagination here */}
    </div>
  );
};
