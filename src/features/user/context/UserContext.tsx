import { createContext, useContext, useEffect, useMemo } from 'react';
import { FCC } from '../../../config';
import { useAuthContext } from '../../auth/context/AuthContext';
import { useUser } from '../hooks/useUser';
import { User } from '../types/user';

interface UserContextProps {
  user: User | null;
}

const UserContext = createContext<UserContextProps>({} as UserContextProps);

export const UserProvider: FCC = ({ children }) => {
  const { loggedIn, user: auth0User, accessToken } = useAuthContext();
  const { useGetUser } = useUser();
  const { data: registeredUser, refetch: refetchUser } = useGetUser();

  useEffect(() => {
    if (loggedIn && accessToken != null) {
      refetchUser().catch(console.error);
    }
  }, [loggedIn, refetchUser, accessToken]);

  const user: User = useMemo(() => {
    return { ...auth0User, ...registeredUser?.data } as User;
  }, [auth0User, registeredUser]);

  const payload: UserContextProps = useMemo(() => {
    if (Object.keys(user).length === 0) return { user: null };
    return { user };
  }, [user]);

  return (
    <UserContext.Provider value={payload}>{children}</UserContext.Provider>
  );
};

export const useUserContext: () => UserContextProps = () =>
  useContext(UserContext);
