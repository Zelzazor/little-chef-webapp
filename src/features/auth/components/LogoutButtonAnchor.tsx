import { useAuthContext } from '../context/AuthContext';

export const LogoutButtonAnchor = () => {
  const { logout } = useAuthContext();

  return <a onClick={logout}>Logout</a>;
};
