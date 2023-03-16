import { Button } from 'antd';
import { useAuthContext } from '../../auth/context/AuthContext';

export const LogoutButton = () => {
  const { logout } = useAuthContext();

  return (
    <Button onClick={logout} type="primary" size={'middle'}>
      Logout
    </Button>
  );
};
