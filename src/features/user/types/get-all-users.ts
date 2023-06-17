// get-all-users.ts

import { PaginatedResponse } from '../../utility/types/response';
import { User } from './user';

export type GetAllUsersResponse = PaginatedResponse<User[]>;
