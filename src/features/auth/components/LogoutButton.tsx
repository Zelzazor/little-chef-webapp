import { Button } from 'antd';
import { useAuthContext } from '../context/AuthContext';

export const LogoutButton = () => {
  const { logout } = useAuthContext();

  return (
    <Button type="primary" size="middle" onClick={logout}>
      Logout
    </Button>
  );
};
