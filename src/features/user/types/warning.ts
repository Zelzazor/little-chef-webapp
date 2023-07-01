// warning.ts
export type Warning = {
  id: string;
  description: string;
  viewed: boolean;
  userId: string;
  createdAt: string;
  updatedAt: Date;
  deletedAt: Date | null;
};
