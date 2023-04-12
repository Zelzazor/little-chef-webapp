import { useAuthContext } from '../context/AuthContext';

export const LogoutButton = () => {
  const { logout } = useAuthContext();

  return <a onClick={logout}>Logout</a>;
};
