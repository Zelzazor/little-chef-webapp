import { User as Auth0User } from '@auth0/auth0-react';

export type Role = {
  id: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
};

export type RegisteredUser = {
  id: string;
  subject: string;
  name: string | null;
  nickName: string | null;
  email: string;
  birthDate: Date | null;
  roleId: string;
  createdAt: Date;
  updatedAt: Date;
  deletedAt: Date | null;
  Role: Role;
};

export type User = Omit<Auth0User, 'userId'> & RegisteredUser;
